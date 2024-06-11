import React from 'react'

function Image(props) {
  return (
    <div className='imgdiv'>
      <div>
        <img src={props.srcUrl} alt="" className='img'/>
      </div>
    </div>
  )
}

export default Image
