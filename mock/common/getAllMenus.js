const fileHandle = require('../utils/fileHandle')
module.exports = {
  // 店铺id
  getAllMenus: async(id) => {
    let result = await fileHandle.read('../files/memuList')
    // 找到当前店铺数据
    result = result.find(item => {
      return item.shopId === id
    })

    result = result ? result.kindMenus : []
    
    result = result.reduce((pre, f_item) => {
      pre.push(...f_item.items)
      return pre
    }, [])

    return result
  }
}