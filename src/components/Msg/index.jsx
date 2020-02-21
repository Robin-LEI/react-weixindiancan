import React from 'react'
import {observer} from 'mobx-react'
import {Dialog} from '../../store/index'
import styles from './index.module.less'
const Msg = observer((props) => {
  const {type, msg, show} = props.msg
  return show ? <div className={styles.msg}>
    <main>
      <i className={"iconfont icon-prompt_fill " + type}></i>
      <h2>{msg}</h2>
    </main>
  </div> : null
})

React.$message = {
  success: (msg, time = 1500) => {
    Dialog.action(msg, 'success', true)
    let timer = setTimeout(() => {
      Dialog.action(msg, 'success', false)
      clearTimeout(timer)
    }, time)
  },
  error: (msg, time = 1500) => {
    Dialog.action(msg, 'error', true)
    let timer = setTimeout(() => {
      Dialog.action(msg, 'error', false)
      clearTimeout(timer)
    }, time)
  }
}

export default () => <Msg msg={Dialog} />