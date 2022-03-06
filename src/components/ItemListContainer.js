import React from 'react'

const ItemListContainer = ({ title, message }) => {
  return (
    <div className='presentation-container'>
      <div className='presentation'>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ItemListContainer
