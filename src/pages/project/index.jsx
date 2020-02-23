import React from 'react'
import List from './list/index.jsx'
import HotList from './hotlist/index.jsx'
import Search from './search/index.jsx'

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
      <Search />
    </Project>
  )
}

export default RenderRouter
