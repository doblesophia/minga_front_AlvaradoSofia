import React from 'react'
import next from "./Carrousel"

const ArrowRight = (props) => {
  
  return (
    <img className= 'w-8 ml-72 cursor-pointer' src="../../public/assets/images/flechaIzquierda.svg" alt="" onClick={props.fnDerecha}/>
  )
}

export default ArrowRight
