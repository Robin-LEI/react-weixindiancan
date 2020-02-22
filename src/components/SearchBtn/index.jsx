import React from 'react'
import Styles from './index.module.less'

const SearchBtn = (props) => {
  const {cb, icon, style = {}} = props
  return <p className={Styles.searchBtn} style={style} onClick={cb}>
    <i className={"iconfont " + icon}></i>
  </p>
}

export default SearchBtn
