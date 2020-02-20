import React from 'react'
import Shop from './shop/index.jsx'
import SelectPeople from './selectpeople/index.jsx'

const Welcome = (props) => {
  return <>
    { props.children }
  </>
}

const RenderRouter = () => {
  return (
    <Welcome>
      <Shop></Shop>
      <SelectPeople></SelectPeople>
    </Welcome>
  )
}

export default RenderRouter
