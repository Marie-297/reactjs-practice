import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const { id } = useParams()
  return (
    <div className='details'>
      <h1>Details of <span style={{fontSize:'50px',color:'darkred'}}>{id}</span> Below</h1>
    </div>
  )
}

export default Details
