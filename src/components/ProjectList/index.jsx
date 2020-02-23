import React from 'react'
import Styles from './index.module.less'

const ProjectList = (props) => {
  const {list = []} = props
  console.log(111, list)
  return <div>
    <ul className={Styles.list}>
      {
        list.map((item, index) => {
          const {name, imagePath, soldCount} = item
          return <li key={index}>
            <aside>
              <img src={imagePath} alt=""/>
              <h4>{name}</h4>
            </aside>
            <aside>
              <div>
                第
                <p>
                  <b>{index+1}</b>
                  <i className="iconfont icon-like_fill"></i>
                </p>
                名
              </div>
              <span>已售{soldCount}份</span>
            </aside>
          </li>
        })
      }
    </ul>
  </div>
}

export default ProjectList