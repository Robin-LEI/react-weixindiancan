import React from 'react'

// 导出一个高阶函数组件
export default (importCom) => {
  // 返回一个class类组件
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        // 判断引入的组件是否加载完全
        Com: null
      }
    }
    async componentDidMount() {
      let { default: Com } = await importCom()
      this.setState({
        Com: Com
      })
    }
    render() {
      let Com = this.state.Com
      return Com ? <Com { ...this.props } /> : null
    }
  }
}