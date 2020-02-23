import React from 'react'
import Styles from './index.module.less'

export default (props) => {
  const {cancel, confirm} = props
  return <div className={Styles.callOut}>
    <main>
      <h2>需要小二帮您叫服务生吗？</h2>
      <section>
        <button onClick={cancel}>取消</button>
        <button onClick={confirm}>确认</button>
      </section>
    </main>
  </div>
}