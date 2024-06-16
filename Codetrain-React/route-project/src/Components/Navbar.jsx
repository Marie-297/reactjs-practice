import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/marie-logo.jpg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navbar'>
      <div className="left-nav">
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className={`mid-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link className='navlink' to='/'>HOME</Link>
        <Link className='navlink' to='/about'>ABOUT</Link>
        <Link className='navlink' to='/contact'>CONTACT</Link>
        <Link className='navlink' to='/shop'>SHOP NOW</Link>
      </div>
      <div className="right-nav">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </div>
  )
}

export default Navbar
