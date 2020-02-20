const express = require('express')
const router = express.Router()
const fileHandle = require('../utils/fileHandle')
const unique = require('../utils/Unique')
const createTime = require('../utils/creatTime')

// 获取店铺信息
router.get('/getShopMsg', async (req, res, next) => {
  const { id } = req.query
  let result = await fileHandle.read('../files/shop')
  result = result.find(item => {
    if (item.id == id) {
      return item
    }
  })
  res.send({
    code: 200,
    msg: '店铺信息获取成功',
    data: result || {}
  })
})

// 获取用户信息
router.get('/getUserMsg', async (req, res, next) => {
  const { id } = req.query
  let result = await fileHandle.read('../files/users')
  result = result.find(item => {
    if (item.id == id) {
      return item
    }
  })
  res.send({
    code: 200,
    msg: '用户信息获取成功',
    data: result || {}
  })
})

// 添加餐桌
router.post('/addPeople', async (req, res, next) => {
  const { shopId, userId, people, tableNum } = req.body
  await fileHandle.add('../files/table', {
    id: unique(),
    // 店铺id
    shopId: shopId,
    // 哪个人订的
    userId: userId,
    // 这一桌有多少人
    people: people,
    // 桌子的编号
    tableNum: tableNum,
    // 订单创建时间
    createTime: createTime()
  })
  
  res.send({
    code: 200,
    msg: '添加成功'
  })
})

module.exports = router