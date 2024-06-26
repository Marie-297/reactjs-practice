import React from 'react'

function Button(props) {
  return (
    <div>
      <button style={{backgroundColor: props.color}}>
        {props.buttonName}
      </button>
    </div>
  )
}

export default Button
