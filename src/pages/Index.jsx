import React from 'react'
import Carrousel from '../components/Carrousel'
import WelcomeWeb from '../components/WelcomeWeb'
import WelcomeMobile from '../components/WelcomeMobile'


const Index = () => {
  return (
    <>
    <div className='lg:w-full lg:h-48 lg:mt-8 lg:bg-gradient-to-b from-pink-300 to-pink-400 lg:flex hidden'>
    <Carrousel/>
    </div>
    <div className="w-full h-screen bg-cover lg:hidden" style={{backgroundImage: "url('./assets/images/FondoMobile.svg')"}}>
     <WelcomeMobile/>
    </div>
    <main >
        <div className='mt-8 w-full h-screen bg-cover bg-center lg:h-96 lg:text-left lg:justify-center hidden lg:flex lg:flex-col' style={{backgroundImage: "url('./assets/images/FondoNaruto.svg')"}}>
    <WelcomeWeb/>
        </div>
    </main>
    </>
  )
}


export default Index
