import React from 'react'
import svg from '../../assets/logo.svg'


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="border-b-2 border-blue-400 h-20 flex justify-center">
          <img className='h-full animate-spin ' src={svg} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header