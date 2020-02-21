
const welcome = require('./api/welcome')
const project = require('./api/project')

module.exports = (app) => {
  app.use('/api/welcome', welcome)
  app.use('/api/project', project)
}
