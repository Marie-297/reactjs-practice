import React, { useEffect, useState } from 'react'

function About() {
  const [width, setWidth] = useState(window.innerWidth)
 useEffect(() => {
  window.addEventListener('resize',() => {
    setWidth(window.innerWidth)
  })
 })
  return (
    <div className='about'>
      <h1>ABOUT MARIE COMPANY LIMITED</h1>
      <button>
        Toggle Window Tracker
      </button>
      <h2>windows width : { width }</h2>
    </div>
  )
}

export default About
