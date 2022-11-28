import React from 'react'

const Todo = () => {
  return (
    <button className='flex items-center mt-5 w-[90%] p-3 rounded-2xl bg-black'>
      <div className='h-10 w-10 border-blue-400 border-2 rounded-lg'></div>
      <span className='ml-4 text-xl whitespace-nowrap text-ellipsis overflow-hidden'>Сделать домашку</span>
    </button>
  )
}

export default Todo