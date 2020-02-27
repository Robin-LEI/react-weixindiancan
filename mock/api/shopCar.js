const express = require('express')
const router = express.Router()
const fileHandle = require('../utils/fileHandle')
const unique = require('../utils/Unique')
const createTime = require('../utils/creatTime')
const getALlMenus = require('../common/getAllMenus')

router.post('/addShopCar', async (req, res, next) => {
  let {id, shopId, menuId, tableNum, count, userId} = req.body
  let data = {
    id: unique(),
    createTime: createTime(),
    shopId: shopId,
    menuId: menuId,
    tableNum: tableNum,
    count: count,
    userId: userId
  }

  // 如果购物车中同一shopId+tableNum+menuId，这个订单则先删除在添加
  let arr = await fileHandle.read('../files/shopCar')

  arr = arr.find(item => {
    return item.shopId === shopId && item.menuId === menuId && tableNum === item.tableNum
  })

  if (arr) {
    await fileHandle.remove('../files/shopCar', 'menuId', menuId)
  }

  await fileHandle.add('../files/shopCar', data)

  res.send({
    code: 200,
    msg: '添加购物车成功'
  })
})

module.exports = router
