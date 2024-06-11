import React from 'react'
import { Link } from 'react-router-dom'

function Err() {
  return (
    <div className='Err-page'>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link className='navlink' to='/'>Go Back To Homepage</Link>
    </div>
  )
}

export default Err
