import React, {useEffect, useState, $message} from 'react'
import BScroll from 'better-scroll'
import {Route} from 'react-router-dom'
import GoBack from '../../../components/GoBack/index.jsx'
import ProjectList from '../../../components/ProjectList/index.jsx'
import {getMenuList} from '../../../service/methods/project'
import {getQueryString} from '../../../utils/tools'
import Styles from './index.module.less'

const Search = props => {
  const [val, setVal] = useState("")
  const [lists, setLists] = useState([])

  useEffect(() => {
    const scroll = new BScroll('#scroll', {
      click: true
    })
    return () => {
      scroll.destroy()
    }
  }, [])

  const handleSearch = () => {
    getMenuList({
      shopId: getQueryString().shopId,
      search: val
    }).then(res => {
      console.log(11, res)
      setLists(res.data.sort((a, b) => b.soldCount - a.soldCount))
    }).catch(err => {
      $message.error(err)
    })
  }

  return <div className={Styles.list}>
    <GoBack {...props}>返回</GoBack>
    <div id="scroll">
      <main>
        <nav>
          <i className="iconfont icon-search" onClick={handleSearch}></i>
          <input type="text" value={val} onChange={e => setVal(e.target.value)} />
          <i className="iconfont icon-delete_fill" onClick={() => setVal("")}></i>
        </nav>
        {
          lists.length==0?<p className={Styles.none}>客官，请在输入框中输入菜单名称</p>:<ProjectList {...props} list={lists} />
        }
      </main>
    </div>
  </div>
}

const RenderRouter = () => {
  return <Route component={Search} path="/project/search"></Route>
}

export default RenderRouter
