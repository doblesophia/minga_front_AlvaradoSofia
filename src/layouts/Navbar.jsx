import React, { useState } from 'react'
import Display from '../components/Display'

const Navbar = () => {
  
  const [open, setOpen] = useState(false)
     
  return (
    <>
    
      <nav className='flex justify-between' >
        <img className='w-12 h-12 mt-4 cursor-pointer' src="../../public/assets/images/Menu.png"  alt="" onClick={()=>setOpen(true)}/>
        <img className="w-12 h-12 mt-4" src="../../public/assets/images/Logo.svg" alt="" />
      </nav>
    {open ? <Display fnApertura={setOpen}/> : null }

    </>

  )
  }

export default Navbar
