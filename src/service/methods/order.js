import http from '../http'
import api from '../api'

// 下单
export function order(data) {
  return http.post(api.sendOrderUrl, data)
}

