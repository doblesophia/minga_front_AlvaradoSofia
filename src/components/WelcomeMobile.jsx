import React from 'react'
import ButtonWelcomeMobile from './ButtonWelcomeMobile'

const WelcomeMobile = () => {
  return (
    <>
    
    <div className='flex flex-col h-96 justify-center items-center lg:hidden'>
        <h1 className='text-white text-3xl font-bold flex lg:hidden'>Live the emotion of the manga</h1>
        <p className='text-white flex lg:hidden'>Find the perfect manga for you</p>
        <ButtonWelcomeMobile/>
      </div>
    </>
  )
}

export default WelcomeMobile
