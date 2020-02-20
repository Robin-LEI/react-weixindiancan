
const welcome = require('./api/welcome')

module.exports = (app) => {
  app.use('/api/welcome', welcome)
}
