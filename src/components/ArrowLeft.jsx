import React from 'react'
import prev from "./Carrousel"

const ArrowLeft = (props) => {
  
  return (
    <img className='w-8 cursor-pointer' src="../../public/assets/images/flechaDerecha.svg" alt="" onClick={props.fnIzquierda} />
  )
}

export default ArrowLeft
