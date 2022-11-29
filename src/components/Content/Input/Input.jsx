import { list } from 'postcss'
import React from 'react'
import Todo from '../Todos/Todo/Todo'

const Input = ({ list }) => {
  const value = React.createRef()
  return (
    <div className='flex justify-center items-center mt-12'>
      <input 
      ref={value} className='text-xl w-[90%] p-3 rounded-2xl bg-black h-13 outline-none'
      type="text"
      onKeyDown={event => {
        if (event.key === 'Enter') {
          // При клике на энтер надо append в todos <todo />
          list.append(<div>true!</div>)
        }
      }}
      />
    </div>
  )
}

export default Input