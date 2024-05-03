import React, { Component } from 'react'


class Image extends Component {
  render() {
    return (
      <div>
        <img className='imgCard' src={this.props.image} alt="card"/>
      </div>
    )
  }
}

export default Image
