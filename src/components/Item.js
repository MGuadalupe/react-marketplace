import React from 'react'

export const Item = ({ producto }) => {
  return (
    <div className='productCard'>
      <img src={producto.url} alt={producto.title} />
      <p>{producto.title}</p>
    </div>
  )
}
