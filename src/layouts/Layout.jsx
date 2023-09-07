import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Index from '../pages/Index'
import { Outlet } from 'react-router-dom'






const Layout = (props) => {
  let {children} = props
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
export default Layout
