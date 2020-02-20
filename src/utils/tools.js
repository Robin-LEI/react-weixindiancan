// 获取带参路由参数
export const getQueryString = function() {
  let str = window.location.search
  let arr = str.substring(1).split('&')
  let obj = {}
  arr.forEach(item => {
    obj[item.split('=')[0]] = item.split('=')[1]
  })
  return obj
}
