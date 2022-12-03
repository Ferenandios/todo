import React from 'react'
import svg from '../../assets/logo.svg'


const Header = () => {
  return (
    <header className='border-b-2 border-blue-400'>
      <div className="h-20 flex justify-center">
        <img className='h-full animate-spin ' src={svg} alt="logo" />
      </div>
    </header>
  )
}

export default Header