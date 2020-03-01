import http from '../http'
import api from '../api'

// 获取菜单列表
export function getMenuList(data = {}) {
  return http.get(`${api.getMenuListUrl}`, {
    params:data
  })
}

// 呼叫店小二
export function callOutPost(data) {
  return http.post(`${api.callOutUrl}`, data)
}

// 获取菜单详情
export function getMenusDetail(data) {
  return http.get(`${api.getMenusDetailUrl}`, {
    params:data
  })
}
