import React from 'react';
import style from './index.module.less'
export default function App(props) {
  return (
    <div className={style.app}>
      {props.children}
    </div>
  )
}
