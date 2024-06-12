import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div className='layout'>
      <Navbar className='nav-bar' />
      <Outlet className='content' />
      <Footer />
    </div>
  )
}

export default Layout
