import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between'>
        <img className='w-12 h-12 mt-4 lg:hidden' src="../../public/assets/images/Menu.png" alt="" />
        <img className="w-12 h-12 mt-4 lg:hidden" src="../../public/assets/images/Logo.svg" alt="" />
      </nav>
    
      <nav className='lg:flex justify-between hidden '>
      <img className='w-12 h-12' src="../../public/assets/images/Menu.png" alt="" />
      <img className="w-12 h-12" src="../../public/assets/images/Logo.svg" alt="" />
    </nav>
    </>
  )
}

export default Navbar
