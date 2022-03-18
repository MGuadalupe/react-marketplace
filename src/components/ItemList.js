import React from 'react'
import { Item } from './Item'
export const ItemList = ({ productos }) => {
  return (
    <>
      <ul className='products-list'>
        {productos.map((producto) => {
          return (
            <li key={producto.id}>
              <Item producto={producto} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
