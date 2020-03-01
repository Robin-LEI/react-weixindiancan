import React, { useState, useEffect, $message, useMemo } from 'react'
import styles from "./index.module.less"
import {
  getShopCarInfo,
  updatePeople,
  changeShopCar,
  clearShopCar
} from "../../service/methods/shopCar"
import { order } from '../../service/methods/order'
import { getQueryString } from '../../utils/tools'
import Nav from "../../components/Nav";
import BtnLink from "../../components/BtnLink"
import { ShopCar as store } from '../../store'
import { observer } from 'mobx-react'

const ShopCar= observer(((props) => {
    let {store} = props
    let {data, change} = store
    const { history } = props
    const [changePState, setchangePState] = useState(false);
    const [price, setPrice] = useState(0);
    const [people, setpeople] = useState(0);
    let { shopId, tableNum } = getQueryString()

    useEffect(() => {
      getShopCarInfo({
        shopId: shopId,
        tableNum: tableNum
      }).then((data) => {
        console.log(data)
        // setdata(data.data)
        change(data.data)
        setpeople(data.data.table.people)
      })

    }, []);

    const allPrice = useMemo(() => {
        let {menus=[]}=data
        return menus.reduce((pre,item)=>{
          let {items}=item
          let res=items.reduce((pre,jtem)=>{
              pre=pre+jtem.price*jtem.count
              return pre
          },0)
          pre=pre+res
          return pre
        },0)
    })

    const changeNum = (type, item) => {
      if(type=="+"){
        item.count++
      }else if(type=="-"&&item.count>1){
        item.count--
      }
      changeShopCar({
        id: item.id,
        count: item.count
      }).then(res => {
        console.log(res)
      })
    }

    const clearUp = () => {
      clearShopCar({
        shopId: shopId,
        tableNum: tableNum
      }).then(res => {
        $message.success('购物车清空成功')
        setTimeout(() => {
          history.push('/project/list')
        }, 1000)
      })
    }

    const sendOrder = () => {
      order({
        shopId: shopId,
        tableNum: tableNum
      }).then(res => {
        history.push('/order')
      })
    }

    const blurInput = () => {
      updatePeople({
        shopId: shopId,
        tableNum: tableNum,
        people: people
      }).then(res => {
        $message.success('修改用餐人数成功')
        setchangePState(false)
      }).catch(err => {
        $message.error(err)
      })
    }

    return <div className={styles.shop}>
        <Nav {...props}></Nav>
        <BtnLink icon="icon-createtask" style={{ bottom: "0.4rem", left: "3.25rem" }} cb={() => {history.push("/project/list")}}>点菜</BtnLink>
        <BtnLink icon="icon-right" style={{ bottom: "0.4rem", right: "0.2rem" }} cb={() => sendOrder() }>下单</BtnLink>

        <main>
            <div className={styles.top}>
                <h2>购物车</h2>
                <section>
                    <aside>
                        <p>
用餐人数：{changePState ? <input type="text" value={people} onChange={(e)=>setpeople(e.target.value)} onBlur={blurInput} /> : <b>{people}</b>}人
                        
                        </p>
                        <span>备注：无</span>
                    </aside>
                    <aside className={styles.topAsideRight}>
                        <i className="iconfont icon-setup"></i>
                        <p onClick={()=>{
                            setchangePState(true)
                        }}>修改</p>
                    </aside>
                </section>
                <section>
                    <aside>

                    <span>购物车里有：{
                             data.menus && data.menus.map((item) => {
                                 return item.name+item.items.length+"个 "
                             })
                        }</span>
                    <b>合计：￥{allPrice}</b>
                    </aside>
                    <aside className={styles.topAsideRight}>
                        <i className="iconfont icon-empty"></i>
                        <p onClick={clearUp}>清空</p>
                    </aside>
                </section>
            </div>
            {
                data.menus && data.menus.map((item, index) => {
                    let { items } = item
                    return <div className={styles.item} key={index}>
                        <h2>{item.name}</h2>
                        {
                            items.map((jtem, index) => {
                                return <section key={index}>
                                    <aside className={styles.itemLeft}>
                                        <p>
                                            <img src={jtem.user.url} alt="" />
                                            <span>{jtem.user.nickname}</span>
                                        </p>
                                        <aside>
                                            <h4>{jtem.name}</h4>
                                            <p>￥{jtem.price}</p>
                                        </aside>
                                    </aside>

                                    <aside className={styles.itemRight}>
                                        <p>
                                            <b onClick={() => changeNum("-",jtem)}>-</b>
                                            <span>{jtem.count}{jtem.account}</span>
                                            <b onClick={()=>changeNum("+",jtem)}>+</b>
                                        </p>
                                    </aside>
                                </section>
                            })
                        }
                    </div>
                })
            }
        </main>
    </div>
}))

export default (props)=> <ShopCar store={store} {...props} />