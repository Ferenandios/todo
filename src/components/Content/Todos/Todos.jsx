import React from 'react'
import Todo from './Todo/Todo'

const Todos = ({ list }) => {
  return (
    <div className='mt-8 flex flex-col items-center'>
      {list.map( (text, id) => (
        <Todo key={id} text={text} />
      ))}
    </div>
  )
}

export default Todos