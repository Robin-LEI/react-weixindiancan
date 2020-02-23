import http from '../http'
import api from '../api'

// 获取菜单列表
export function getMenuList(data = {}) {
  const {shopId, type, search} = data
  return http.get(`${api.getMenuListUrl}/?id=${shopId}&type=${type}&search=${search}`)
}

// 呼叫店小二
export function callOutPost(data) {
  return http.post(`${api.callOutUrl}`, data)
}
