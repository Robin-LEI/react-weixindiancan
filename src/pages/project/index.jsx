import React from 'react'
import List from './list/index.jsx'
import HotList from './hotlist/index.jsx'

const Project = (props) => {
  return <>
    { props.children }
  </>
}

const RenderRouter = () => {
  return (
    <Project>
      <List />
      <HotList />
    </Project>
  )
}

export default RenderRouter
