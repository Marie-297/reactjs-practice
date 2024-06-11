import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/marie-logo.jpg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="left-nav">
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className="mid-nav">
        <Link className='navlink' to='/'>HOME</Link>
        <Link className='navlink' to='/about'>ABOUT</Link>
        <Link className='navlink' to='/contact'>CONTACT</Link>
        <Link className='navlink' to='/shop'>SHOP NOW</Link>
      </div>
      <div className="right-nav"></div>
    </div>
  )
}

export default Navbar
