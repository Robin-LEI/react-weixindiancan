const express = require('express')
const router = express.Router()
const fileHandle = require('../utils/fileHandle')
const unique = require('../utils/Unique')
const createTime = require('../utils/creatTime')
const getALlMenus = require('../common/getAllMenus')


// 根据店铺id获取商铺的菜单等详细信息
router.get('/getMenuList', async (req, res, next) => {
  // id：商铺id
  // type：为hot表示热搜商品
  // search：菜名搜索
  const {shopId, type, search} = req.query
  // 这个文件里面包含了所有店铺的相关的信息，需要根据店铺id进行筛选
  let result = await fileHandle.read('../files/memuList')
  result = result.find((item) => {
    return item.shopId === shopId
  }, [])

  // 根据type搜索热搜菜品
  if (type == true+'') {
    result = result ? result.kindMenus.reduce((pre, re_item) => {
      re_item.items.forEach(fo_item => {
        if (fo_item.hot == true) {
          pre.push(fo_item)
        }
      })
      return pre
    }, []) : []
  }

  if (type == false+'') {
    result = result ? result.kindMenus.reduce((pre, re_item) => {
      re_item.items.forEach(fo_item => {
        if (fo_item.hot == false) {
          pre.push(fo_item)
        }
      })
      return pre
    }, []) : []
  }

  // search
  if (search != undefined) {
    // console.log(11, result)
    let arr = []
    result = result ? result.kindMenus.map((mp_item) => {
      const {items} = mp_item
      items.forEach(it_item => {
        if (it_item.name.includes(search)) {
          arr.push(it_item)
        }
      })
    }): []
    result = arr
    // result = result.filter(fi_item => {
    //   return fi_item && String(fi_item).trim()
    // }) 
  }
  

  res.send({
    msg: 'success',
    code: 200,
    data: result || []
  })
})

// 呼叫服务员
router.post('/callout', async(req, res, next) => {
  let {shopId, userId, tableNum} = req.body
 
  await fileHandle.add('../files/callout', {
    id: unique(),
    shopId: shopId,
    userId: userId,
    tableNum: tableNum,
    createTime: createTime()
  })

  res.send({
    msg: 'success',
    code: 200
  })
})

// 菜单详情
router.get('/getAllMenus', async(req, res, next) => {
  // 店铺id，菜品id
  let {shopId, id} = req.query
  let result = await getALlMenus.getAllMenus(shopId)
  // 找到当前菜品id对应的信息
  result = result.find(item => {
    return item.id === id
  })
  res.send({
    msg: 'success',
    code: 200,
    data: result
  })
})

module.exports = router
