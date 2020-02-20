import http from '../http'
import api from '../api'

// 获取用户信息
export function getUserInfo(id) {
  return http.get(`${api.getUserInfoUrl}/?id=${id}`)
}

// 获取店铺信息
export function getShopInfo(id) {
  return http.get(`${api.getShopInfoUrl}/?id=${id}`)
}

// 用餐人数添加
export function addPeople(data) {
  return http.post(`${api.addPeopleUrl}`, {...data})
}