import React, {useState, useEffect, $message} from 'react'
import {Route} from 'react-router-dom'
import {getQueryString} from '../../../utils/tools'
import Styles from './index.module.less'

const List = (props) => {
  

  useEffect(() => {
    
  }, [])


  return <div className={Styles.list}>
    list page
  </div>
}

const RenderRouter = () => {
  return <Route path="/project/list" component={List} />
}

export default RenderRouter
