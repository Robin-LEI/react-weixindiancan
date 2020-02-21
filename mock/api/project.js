const express = require('express')
const router = express.Router()
const fileHandle = require('../utils/fileHandle')
const unique = require('../utils/Unique')
const createTime = require('../utils/creatTime')


// 根据店铺id获取商铺的菜单等详细信息
router.get('/getMenuList', async (req, res, next) => {
  // id：商铺id
  // type：为hot表示热搜商品
  // search：菜名搜索
  const {id, type, search} = req.query
  // 这个文件里面包含了所有店铺的相关的信息，需要根据店铺id进行筛选
  let result = await fileHandle.read('../files/memuList')
  result = result.find((item) => {
    return item.shopId === id
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
  // console.log(result)

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
    result = result.length ? result.map((mp_item) => {
      if (mp_item.name.includes(search)) {
        return mp_item
      }
    }): []

    result = result.filter(fi_item => {
      return fi_item && String(fi_item).trim()
    }) 
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

module.exports = router
