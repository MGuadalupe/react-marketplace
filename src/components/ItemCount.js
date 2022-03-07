import React from 'react'
import { useState } from 'react'

export const ItemCount = ({ stock, initial }) => {
  let [estado, setEstado] = useState(initial)

  const handleSumar = () => {
    if (estado < stock) {
      setEstado(estado + 1)
    }
  }
  const handleRestar = () => {
    if (estado > 0) {
      setEstado(estado - 1)
    }
  }
  const onAdd = () => {
    if (estado) {
      alert(`Agregaste al carrito ${estado} productos!`)
    }
  }

  return (
    <div className='counterContainer'>
      <div className='counter'>
        <button onClick={handleSumar}>
          <span className='material-icons'>add_circle</span>
        </button>
        <span>{estado}</span>
        <button onClick={handleRestar}>
          <span className='material-icons'>remove_circle</span>
        </button>
      </div>

      <div>
        <button onClick={onAdd}>Add to cart</button>
      </div>
    </div>
  )
}
