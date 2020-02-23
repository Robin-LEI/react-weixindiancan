import React from 'react'
import {Route} from 'react-router-dom'
import GoBack from '../../../components/GoBack/index.jsx'
import Styles from './index.module.less'

const HotList = (props) => {
  return <div>
    <GoBack {...props}>返回</GoBack>
  </div>
}

const RenderRouter = () => {
  return <Route component={HotList} path="/project/hotlist"></Route>
}

export default RenderRouter
