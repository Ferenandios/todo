import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const Todo = ({text}) => {
  const [isChecked, setIsChecked] = useState(false)
  const checkedBox = (<div className='h-10 w-10 border-blue-400 border-[3px] rounded-lg relative'><span className='flex justify-center absolute -top-4 -left-[6px] items-center w-[170%] h-[170%] text-8xl'><AiOutlineCheck /></span></div>)
  const uncheckedBox = (<div className='h-10 w-10 border-blue-400 border-[3px] rounded-lg'></div>)
  return (
    <button 
    className='outline-none flex items-center mt-5 w-[90%] p-3 rounded-2xl bg-black'
    onClick={() => {
      setIsChecked(!isChecked)
    }}
    >
      {isChecked ? checkedBox : uncheckedBox}
      <span className='ml-4 text-xl whitespace-nowrap text-ellipsis overflow-hidden'>{isChecked ? <s>{text}</s> : text}</span>
    </button>
  )
}

export default Todo