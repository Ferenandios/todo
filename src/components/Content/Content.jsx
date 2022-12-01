import React, { useState } from 'react'
import Input from './Input/Input'
import Todos from './Todos/Todos'

const Content = () => {
  const [list, setList] = useState(['Я ToDo, Добавьте в меня что-нибудь!'])
  return (
    <main>
      <Todos list={list} />
      <Input list={list} setList={setList} />
    </main>
  )
}

export default Content