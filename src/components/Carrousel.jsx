import React from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'


const Carrousel = () => {
  return (
    <>
     <div className='lg:w-full lg:h-48 lg:mt-8 lg:bg-gradient-to-b from-pink-300 to-pink-400 lg:flex hidden'>
          <ArrowLeft/>
          <img className='lg:w-72 lg:h-72 lg:-mt-20' src="../../public/assets/images/NarutoSVG.svg" alt="" />
          <img className='lg:w-52 lg:h-52 lg:-mt-8 ml-12' src="../../public/assets/images/posternaruto.svg" alt="" />
          
          <div className='lg:w-56 text-left ml-28 pt-12 '>
          <h3 className='text-white text-2xl text-left'>Shonen</h3>
          <p className='text-white text-xs text-left lg:w-80'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <ArrowRight/>
        </div>
    </>
  )
}

export default Carrousel
