import React, {useState, useEffect} from 'react'
import BScroll from 'better-scroll'
import Styles from './index.module.less'

const MenuItems = (props) => {
  const [active, setActive] = useState(false)
  
  const {list, getClickedEle} = props
  useEffect(() => {
    const scroll = new BScroll("#asideLeft", {
      click: true
    })
    return () => {
      scroll.destroy()
    }
  }, [])
  const handleClickMenuItem = (index) => {
    setActive(false)
    // 把index标识传递给父元素
    getClickedEle(index)
  }
  return <div className={active?(Styles.active+" "+Styles.menuItems):Styles.menuItems}>
    <aside className={Styles.asideLeft} id="asideLeft">
      <main>
        <ul>
          <li>分类</li>
          <li>
            <i className="iconfont icon-flag_fill"></i>
            <span>本周销量榜</span>
          </li>
          <li>
            <i className="iconfont icon-document_fill"></i>
            <span>点过的菜</span>
          </li>
        </ul>
        <ul>
          {
            list.map(item => {
              const {name, index} = item
              return <li key={index} onClick={() => handleClickMenuItem(index)}>{name}</li>
            })
          }
        </ul>
      </main>
      <p onClick={() => setActive(!active)}>
        <i className="iconfont icon-other"></i>
        <span>分类</span>
      </p>
    </aside>
    <aside></aside>
  </div>
}

export default MenuItems
