import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='brand'></div>
      <div className='itemsNav'>
        <a href='/'>Comprar</a>
        <a href='/'>Vender</a>
        <a href='/'>Iniciar Sesión</a>
        <a href='/'>
          <CartWidget></CartWidget>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
