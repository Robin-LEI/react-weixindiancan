import http from '../http'
import api from '../api'

export function sendShopCar(data) {
  return http.post(api.sendShopCarUrl, data)
}
