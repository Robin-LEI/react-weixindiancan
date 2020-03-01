import React, {useState, useEffect, $message} from 'react'
import {Route, Link} from 'react-router-dom'
import BScroll from 'better-scroll'
import {getMenuList, callOutPost} from '../../../service/methods/project'
import {getQueryString} from '../../../utils/tools'
import SearchBtn from '../../../components/SearchBtn/index.jsx'
import BtnLink from '../../../components/BtnLink/index.jsx'
import MenuItems from '../../../components/MenuItems/index.jsx'
import Nav from '../../../components/Nav/index.jsx'
import CallOut from '../../../components/CallOut/index.jsx'
import Styles from './index.module.less'

const List = (props) => {
  const {history} = props
  let [list, setList] = useState([])
  let [scroll, setScroll] = useState(null)
  let [callOut, setCallOut] = useState(false)

  useEffect(() => {
    getMenuList({
      shopId: getQueryString().shopId
    }).then(async res => {
      await setList(res.data.kindMenus)
    }).catch(err => {
      $message.error(err)
    })
  }, [])

  useEffect(() => {
    // 初始化better-scroll
    let scroll = new BScroll('#scroll', {
      click: true
    })
    setScroll(scroll)
    return () => {
      scroll.destroy()
    }
  }, [])

  const getClickedEle = (index) => {
    const top = document.getElementById(index).offsetTop
    // 0: x轴移动距离  -top：y轴往上移动指定距离  1000：在1秒内完成
    scroll.scrollTo(0, -top, 1000)
  }

  // 确认服务铃
  const confirm = () => {
    const {userId, shopId, tableNum} = getQueryString()
    setCallOut(false)
    callOutPost({
      userId: userId,
      shopId: shopId,
      tableNum: tableNum
    }).then(res => {
      $message.success('呼叫店小二成功')
    }).catch(err => {
      $message.error(err)
    })
  }

  return <div>
    <SearchBtn cb={() => {history.push('/project/search')}} icon="icon-search" />
    <BtnLink cb={() => {history.push('/shopCar')}} icon="icon-shop_fill" style={{bottom: '0.4rem', right: '0.2rem'}}>购物车</BtnLink>
    <MenuItems list={list} getClickedEle={getClickedEle}></MenuItems>
    <Nav />
    {callOut && <CallOut cancel={() => setCallOut(false)} confirm={confirm} />}
    <div id='scroll' className={Styles.list}>
      <main>
        <nav>
          <Link to="/project/list">
            <i className="iconfont icon-examineandapprove"></i>
            <span>随便点</span>
          </Link>
          <Link to="/project/hotlist">
            <i className="iconfont icon-flag_fill"></i>
            <span>热销榜</span>
          </Link>
          <Link to="/project/list">
            <i className="iconfont icon-document_fill"></i>
            <span>点过的菜</span>
          </Link>
          <a onClick={() => {setCallOut(true)}}>
            <i className="iconfont icon-remind_fill"></i>
            <span>服务铃</span>
          </a>
        </nav>
        {/* 列表 */}
        <div className={Styles.wrapper}>
          {
            list.map(item => {
              const {name, items, index} = item
              return <section key={index} id={index}>
                <h3>{name}</h3>
                <ul>
                  {
                    items.map(map_item => {
                      const {imagePath, name, memberPrice, id, price} = map_item
                      return <li key={id} onClick={() => history.push(`/project/detail/${id}`)}>
                        <img src={imagePath} alt=""/>
                        <h4>会员价：&yen;{memberPrice}</h4>
                        <h5>原价：&yen;{price}</h5>
                        <span>{name}</span>
                      </li>
                    })
                  }
                </ul>
              </section>
            })
          }
        </div>
      </main>
    </div>
  </div>
}

const RenderRouter = () => {
  return <Route path="/project/list" component={List} />
}

export default RenderRouter
