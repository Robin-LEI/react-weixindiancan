import http from '../http'
import api from '../api'

// 获取菜单列表
export function getMenuList(id) {
  console.log('id', id)
  return http.get(`${api.getMenuListUrl}/?id=${id}`)
}