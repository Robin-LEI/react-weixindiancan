
const welcome = require('./api/welcome')
const project = require('./api/project')
const addShopCar = require('./api/shopCar')
const order = require('./api/order')

module.exports = (app) => {
  app.use('/api/welcome', welcome)
  app.use('/api/project', project)
  app.use('/api/project', addShopCar)
  app.use('/api/project', order)
}
