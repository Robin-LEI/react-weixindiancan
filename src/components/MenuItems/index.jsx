import React, {useState} from 'react'
import Styles from './index.module.less'

const MenuItems = (props) => {
  const [active, setActive] = useState(false)
  const {list} = props
  return <div className={active?(Styles.active+" "+Styles.menuItems):Styles.menuItems}>
    <aside className={Styles.asideLeft}>
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
              return <li key={index}>{name}</li>
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
