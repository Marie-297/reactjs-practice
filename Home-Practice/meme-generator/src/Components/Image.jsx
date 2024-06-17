import React from 'react'

function Image(props) {
  return (
    <div className='imgdiv'>
      <div className='imgCont'>
        <img src={props.srcUrl} alt="" className='img'/>
        <h1 className='top'>{props.topText}</h1>
        <h1 className='bottom'>{props.bottomText}</h1>
      </div>
    </div>
  )
}

export default Image
