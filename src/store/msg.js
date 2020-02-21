import {decorate, observable, action} from 'mobx'

class Control {
  msg = '操作成功'
  show = false
  type = 'normal'
  action = ((msg, type, show) => {
    this.msg = msg
    this.type = type
    this.show = show
  })
}

decorate(Control, {
  msg: observable,
  show: observable,
  type: observable
})

export default new Control()