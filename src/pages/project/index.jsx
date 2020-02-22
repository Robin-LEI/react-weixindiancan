import React from 'react'
import List from './list/index.jsx'

const Project = (props) => {
  return <>
    { props.children }
  </>
}

const RenderRouter = () => {
  return (
    <Project>
      <List />
    </Project>
  )
}

export default RenderRouter
