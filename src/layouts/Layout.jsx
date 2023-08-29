import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'




const Layout = (props) => {
  let {children} = props
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
