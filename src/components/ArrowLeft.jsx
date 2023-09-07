import React from 'react'


const ArrowLeft = (props) => {
  
  return (
    <img className='w-8 cursor-pointer' src="../../public/assets/images/flechaDerecha.svg" alt="" onClick={props.fnIzquierda} />
  )
}

export default ArrowLeft
