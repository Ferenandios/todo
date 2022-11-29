import React, { useState } from 'react'
import Input from './Input/Input'
import Todos from './Todos/Todos'

const Content = () => {
  const [list, setList] = useState()
  return (
    <main>
      <Todos setList={setList}/>
      <Input list={list} />
    </main>
  )
}

export default Content