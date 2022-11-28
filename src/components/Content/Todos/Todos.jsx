import React from 'react'
import Todo from './Todo/Todo'

const Todos = () => {
  return (
    <div className='mt-8 flex flex-col items-center'>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
}

export default Todos