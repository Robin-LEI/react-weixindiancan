import React, {useState, useEffect, $message} from 'react'
import {Route} from 'react-router-dom'
import {getQueryString} from '../../../utils/tools'
import {addPeople} from '../../../service/methods/welcome.js'
import Styles from './index.module.less'

const SelectPeople = (props) => {
  
  const [activeNum, setActiveNum] = useState(0)
  const [tableNum, setTableNum] = useState(0)

  useEffect(() => {
    
    const {tableNum} = getQueryString()
    setTableNum(tableNum)
  }, [])

  const handleClick = () => {
    const {tableNum, userId, shopId} = getQueryString()
    addPeople({
      shopId,
      userId,
      tableNum,
      people: activeNum
    }).then(res => {
      $message.success('添加成功')
    }).catch(err => {
      throw Error(err)
    })
  }

  return <div className={Styles.selectPeople}>
    <h3>{tableNum}号</h3>
    <div>用餐人数</div>
    <span>请选择正确的用餐人数</span>
    <ul>
      {
        [...new Array(8)].map((item, index) => {
          return <li key={index} className={activeNum === index+1 ? Styles.active : ''} onClick={() => setActiveNum(index+1)}>{index+1}</li>
        })
      }
    </ul>
    <p className={Styles.btn} onClick={handleClick}>开始点餐</p>
  </div>
}

const RenderRouter = () => {
  return <Route path="/welcome/selectpeople" component={SelectPeople} />
}

export default RenderRouter
