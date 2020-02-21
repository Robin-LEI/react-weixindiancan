import React from 'react';
import Msg from '../components/Msg/index.jsx'
import style from './index.module.less'
export default function App(props) {
  return (
    <div className={style.app}>
      {props.children}
      <Msg />
    </div>
  )
}
