const fs = require('fs')
const path = require('path')

module.exports = {
  // 查
  read(url) {
    return new Promise((resolve, reject) => {
      fs.readFile(path.resolve(__dirname, url), 'utf8', (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(JSON.parse(data))
      })
    })
  },
  // 增
  write(url, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path.resolve(__dirname, url), JSON.stringify(data), 'utf8', err => {
        if (err) {
          reject(err)
          return
        }
        resolve()
      })
    })
  },
  async add(url, data) {
    const result = await this.read(url)
    result.push(data)
    await this.write(url, result)
  },
  async amend(url, data) {
    const result = await this.read(url)
    result = result.map(item => {
      if (item.id == data.id) {
        return data
      } else {
        return item
      }
    })
    await this.write(url, result)
  },
  async remove(url, id) {
    const result = await this.read(url)
    result = result.filter(item => {
      return item.id != id
    })
    await this.write(url, result)
  }
}