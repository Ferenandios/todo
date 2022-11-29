import React from 'react'
import Todo from './Todo/Todo'

const Todos = ({ setList }) => {
  const list = React.createRef()
  setList(list.current)
  return (
    <div ref={list} className='mt-8 flex flex-col items-center'>
      <Todo />
    </div>
  )
}

export default Todos