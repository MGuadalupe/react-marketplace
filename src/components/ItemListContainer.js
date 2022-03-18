import React from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import { Loading } from './Loading'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemListContainer = ({ title, message, productosIniciales }) => {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales)
      }, 1000)
    })

    pedido
      .then((resultado) => {
        setProductos(productosIniciales)
        setLoading(false)
      })
      .catch((error) => console.log('hubo un error'))
  }, [])

  return (
    <div>
      <div className='presentation-container'>
        <div className='presentation'>
          <h2>{title}</h2>
          <p>{message}</p>

          <ItemCount stock={10} initial={1} />
        </div>
      </div>
      {loading ? <Loading /> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer
