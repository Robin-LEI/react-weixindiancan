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

export const serialize=(data)=>{
  let price=String(data).replace(/(\d+)\.(\d+)/,($0,$1,$2)=>{
      $2=$2.padEnd(2,0)
      return $1+"."+$2
  })
  price=price.includes(".")?price:price+".00"

  return price
}
