import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
      <h1>Mi E-commerce</h1>
      <div className='itemsNav'>
        <a href='/'>Comprar</a>
        <a href='/'>Vender</a>
        <a href='/'>Iniciar Sesión</a>
      </div>
    </nav>
  )
}

export default Navbar
