import React from 'react'
import List from './list/index.jsx'
import HotList from './hotlist/index.jsx'
import Search from './search/index.jsx'
import Detail from './detail/index.jsx'

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
      <Detail />
    </Project>
  )
}

export default RenderRouter
