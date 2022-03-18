import React from 'react'

export const Loading = () => {
  return (
    <div className='center flex-column'>
      <img
        src='https://i.pinimg.com/736x/e3/31/4e/e3314ed9bb229cbe2e16c2387a4beaad.jpg'
        alt='cargando'
        className='loading-image'
      />

      <p>Los gatitos se estan cargando... Esperá</p>
    </div>
  )
}
