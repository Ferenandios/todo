import React, { useRef } from 'react'

const Input = ({ list, setList }) => {
  const value = React.useRef()
  return (
    <div className='flex justify-center items-center mt-12'>
      <input 
      ref={value} className='text-xl w-[90%] p-3 rounded-2xl bg-black h-13 outline-none'
      type="text"
      onKeyDown={event => {
        if (event.key === 'Enter') {
          const arr = list.slice() // clone list
          arr.push(value.current.value)
          setList(arr)
          value.current.value = ''
        }
      }}
      />
    </div>
  )
}

export default Input