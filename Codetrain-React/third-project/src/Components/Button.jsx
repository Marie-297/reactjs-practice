

// import React from 'react'

// function Button(props) {
//   return (
//     <div>
//       <button style={{backgroundColor:props.color, color:props.textColor}}>{props.name}</button>
//     </div>
//   )
// }

// export default Button


import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button style={{backgroundColor:this.props.color, color:this.props.textColor}}>{this.props.name}</button>
      </div>
    )
  }
}
export default Button


