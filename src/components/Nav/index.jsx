import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Styles from './index.module.less'

const Nav = (props) => {
  const [state, setstate] = useState(false)
  return <div className={Styles.nav}>
    {
      state ? <div className={Styles.navList}>
      <section>
        <Link to="/project/list">
          <p>
            <i className="iconfont icon-createtask"></i>
          </p>
          <span>菜单</span>
        </Link>
        <Link to="">
          <p>
            <i className="iconfont icon-publishgoods_fill"></i>
          </p>
          <span>购物车</span>
        </Link>
        <Link to="">
          <p>
            <i className="iconfont icon-document"></i>
          </p>
          <span>已下单的菜</span>
        </Link>
        <Link to="">
          <p>
            <i className="iconfont icon-addressbook"></i>
          </p>
          <span>会员中心</span>
        </Link>
        <a onClick={() => setstate(false)}>
          <p>
            <i className="iconfont icon-close"></i>
          </p>
          <span>返回</span>
        </a>
      </section>
    </div> : <p className={Styles.navText} onClick={() => setstate(true)}>
      <span>导航</span>
    </p>
    }
  </div>
}

export default Nav
