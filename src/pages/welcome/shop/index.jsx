import React, {useState, useEffect} from 'react'
import {
  Route, Link
} from 'react-router-dom'
import Styles from './shop.module.less'
import {getQueryString} from '../../../utils/tools'
import {getUserInfo, getShopInfo} from '../../../service/methods/welcome.js'

const Shop = (props) => {

  const [user, setUserInfo] = useState({})
  const [shop, setShopInfo] = useState({})

  useEffect(() => {
    // 解析 url 参数 获取 userId
    // 获取用户信息
    getUserInfo(getQueryString().userId).then(res => {
      setUserInfo({...res.data})
    }).catch(err => {
      throw Error(err)
    })
    // 获取商店信息
    getShopInfo(getQueryString().shopId).then(res => {
      setShopInfo({...res.data})
    }).catch(err => {
      throw Error(err)
    })
  }, [])

  return (
    <div className={Styles.shop}>
      <h2>
        <span>{shop.shop_name}</span>
      </h2>
      <section>{user.nickname}</section>
      <Link to="/welcome/selectpeople" className={Styles.btn}>开始点餐结账</Link>
    </div>
  )
}

const RenderRouter = () => {
  return <Route path="/welcome/shop" component={Shop}></Route>
}

export default RenderRouter
