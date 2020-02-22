import React, {useState, useEffect, $message} from 'react'
import {Route, Link} from 'react-router-dom'
import BScroll from 'better-scroll'
import {getMenuList} from '../../../service/methods/project'
import {getQueryString} from '../../../utils/tools'
import Styles from './index.module.less'

const List = (props) => {
  

  useEffect(() => {
    getMenuList(getQueryString().shopId).then(res => {
      console.log(res)
    }).catch(err => {
      $message.error(err)
    })
  }, [])

  useEffect(() => {
    // 初始化better-scroll
    let scroll = new BScroll('#scroll', {
      click: true
    })

    return () => {
      scroll.destroy()
    }
  }, [])


  return <div>
    <div id='scroll' className={Styles.list}>
      <main>
        <nav>
          <Link to="/project/list">
            <i className="iconfont icon-examineandapprove"></i>
            <span>随便点</span>
          </Link>
          <Link to="/project/list">
            <i className="iconfont icon-flag_fill"></i>
            <span>热销榜</span>
          </Link>
          <Link to="/project/list">
            <i className="iconfont icon-document_fill"></i>
            <span>点过的菜</span>
          </Link>
          <a onClick={() => {}}>
            <i className="iconfont icon-remind_fill"></i>
            <span>服务铃</span>
          </a>
        </nav>
      </main>
    </div>
  </div>
}

const RenderRouter = () => {
  return <Route path="/project/list" component={List} />
}

export default RenderRouter
