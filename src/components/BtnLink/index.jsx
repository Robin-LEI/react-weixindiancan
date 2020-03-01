import React from 'react'
import Styles from './index.module.less'

const BtnLink = (props) => {
  const {children, icon, cb, style={}} = props
  return <p className={Styles.btn} style={style} onClick={() => cb()}>
    <i className={"iconfont " + icon}></i>
    <span>{children}</span>
  </p>
}

export default BtnLink
