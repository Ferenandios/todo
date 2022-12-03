import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import styles from './Todo.module.scss'

const Todo = ({text}) => {
  const currentButton = useRef()
  const currentSpan = useRef()
  const [isChecked, setIsChecked] = useState(false)
  const checkedBox = (<div className='h-10 w-10 border-blue-400 border-[3px] rounded-lg relative'><span className='flex justify-center absolute -top-4 -left-[6px] items-center w-[170%] h-[170%] text-8xl'><AiOutlineCheck /></span></div>)
  const uncheckedBox = (<div className='h-10 w-10 border-blue-400 border-[3px] rounded-lg'></div>)
  return (
    <button
    ref={currentButton} 
    className={styles.button}
    onClick={() => {
      setIsChecked(!isChecked)
    }}
    >
      {isChecked ? checkedBox : uncheckedBox}
      <div className='flex ml-4 w-full'>
        <span 
        ref={currentSpan}
        className={[styles.span, ' max-w-[360px]'].join('')}
        >{isChecked ? <s>{text}</s> : text}
        </span>
      </div>
    </button>
  ) // длина всей кнопки - 80px max-w-[354px]
}

export default Todo