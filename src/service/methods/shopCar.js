import http from '../http'
import api from '../api'

// 添加购物车
export function sendShopCar(data) {
  return http.post(api.sendShopCarUrl, data)
}

// 获取购物车信息
export function getShopCarInfo(data) {
  return http.get(api.getShopCarUrl, {
    params: data
  })
}

// 修改用餐人数
export function updatePeople(data) {
  return http.post(api.changePeopleUrl, data)
}

// 修改购物车数量
export function changeShopCar(data) {
  return http.get(api.changeShopCarUrl, {
    params: data
  })
}

// 清空购物车
export function clearShopCar(data) {
  return http.get(api.clearShopCarUrl, {
    params: data
  })
}
