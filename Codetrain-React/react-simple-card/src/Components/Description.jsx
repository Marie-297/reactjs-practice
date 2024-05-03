import React, { Component } from 'react'

class Description extends Component {
  render() {
    return (
      <div>
         <p className="description">{this.props.description}</p>
      </div>
    )
  }
}

export default Description
