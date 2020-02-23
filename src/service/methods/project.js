import http from '../http'
import api from '../api'

// 获取菜单列表
export function getMenuList(id) {
  return http.get(`${api.getMenuListUrl}/?id=${id}`)
}

// 呼叫店小二
export function callOutPost(data) {
  return http.post(`${api.callOutUrl}`, data)
}
