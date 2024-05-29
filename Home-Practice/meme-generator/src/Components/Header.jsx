import React from 'react'
import logo from '../assets/Images/Logo.png'

function header() {
  return (
    <div className='header'>
      <div className="left-header">
        <img src={logo} alt="" />
      </div>
      <div className="right-header">
        <h3>Marie's Project</h3>
      </div>
    </div>
  )
}

export default header
