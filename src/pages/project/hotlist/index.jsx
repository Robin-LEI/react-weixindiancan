import React, {useEffect, $message, useState} from 'react'
import {Route} from 'react-router-dom'
import BScroll from 'better-scroll'
import GoBack from '../../../components/GoBack/index.jsx'
import ProjectList from '../../../components/ProjectList/index.jsx'
import {getMenuList} from '../../../service/methods/project'
import {getQueryString} from '../../../utils/tools'
import Styles from './index.module.less'

const HotList = (props) => {
  const [list, setList] = useState([])

  useEffect(() => {
    getMenuList({
      shopId: getQueryString().shopId,
      type: true
    }).then(res => {
      setList(res.data.sort((a, b) => b.soldCount - a.soldCount))
      console.log(res)
    }).catch(err => {
      $message.error(err)
    })
  }, [])

  useEffect(() => {
    const scroll = new BScroll('#scroll', {
      click: true
    })
    return () => {
      scroll.destroy()
    }
  }, [])

  return <div className={Styles.hot}>
    <GoBack {...props}>返回</GoBack>
    <div className={Styles.list} id="scroll">
      <main>
        <nav>本店销量榜</nav>
        <ProjectList {...props} list={list} />
      </main>
    </div>
  </div>
}

const RenderRouter = () => {
  return <Route component={HotList} path="/project/hotlist"></Route>
}

export default RenderRouter
