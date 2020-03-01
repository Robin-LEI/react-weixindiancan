import React, { useEffect, $message, useState } from 'react'
import { Route } from 'react-router-dom'
import { getMenusDetail } from '../../../service/methods/project'
import { getQueryString } from '../../../utils/tools'
import GoBack from '../../../components/GoBack'
import Styles from './index.module.less'

const Detail = (props) => {
  let [data, setData] = useState({})
  let [count, setcount] = useState(1)
  useEffect(() => {
    getMenusDetail({
      shopId: getQueryString().shopId,
      id: props.match.params.id
    }).then(res => {
      console.log(res)
      setData(res.data)
    }).catch(err => {
      $message.error(err)
    })
  }, [])

  const submit = () => {}


  return <div className={Styles.detail}>
    <GoBack {...props}>返回</GoBack>
    <img src={data.imagePath} alt="" />
    <section>
        <h3>{data.name}</h3>
        <p>￥{data.price}/{data.account}</p>
    </section>
    <footer>
        <aside>
            <label htmlFor="">数量</label>
            <p>
                <b onClick={()=>setcount(count>1?count-1:count)}>-</b>
                <span>{count}{data.account}</span>
                <b onClick={()=>setcount(count+1)}>+</b>
            </p>
        </aside>
        <button className={Styles.shop} onClick={submit}>
            加入购物车
        </button>
    </footer>
  </div>
}

const RenderRouter = () => {
  return <Route path="/project/detail/:id" component={Detail} />
}

export default RenderRouter
