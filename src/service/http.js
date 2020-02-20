import axios from 'axios'

// 请求拦截
axios.interceptors.request.use(config => {
  return config
})

// 响应拦截
axios.interceptors.response.use(res => {
  return res.data
})

export default axios
