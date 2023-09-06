
import React from 'react'
import { Link } from 'react-router-dom'


const Display = (props) => {
  
  return (
    <>
      <div className=' absolute top-10 left-0 w-screen lg:w-1/3 h-screen bg-gradient-to-r from-pink-400 to-pink-300 rounded-xl flex flex-col items-center gap-8'>
      <button className='text-2xl rounded-full font-bold hover: bg-white w-8 h-8 text-center mt-4 cursor-pointer' onClick={()=>props.fnApertura(false)}>x</button>
      <Link to="/" className='text-2xl w-1/2 rounded-xl mt-8 font-bold hover:bg-white h-10 cursor-pointer'>Home</Link>
      <Link to="/authors/me" className='text-2xl w-1/2 rounded-xl mt-8 font-bold hover:bg-white cursor-pointer'>Profile</Link>
      <button className='text-2xl w-1/2 rounded-xl font-bold hover:bg-white h-10 cursor-pointer'>Register</button>
      <button className='text-2xl w-1/2 rounded-xl font-bold hover:bg-white h-10 cursor-pointer'>Sign in</button>
   </div>
    </>
  )

  }
export default Display
  