import React from 'react'
import { ItemCount } from './ItemCount'

const ItemListContainer = ({ title, message }) => {
  return (
    <div className='presentation-container'>
      <div className='presentation'>
        <h2>{title}</h2>
        <p>{message}</p>
        <ItemCount stock={10} initial={1} />
      </div>
    </div>
  )
}

export default ItemListContainer
