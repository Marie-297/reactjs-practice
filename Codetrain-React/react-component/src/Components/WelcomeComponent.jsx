import React, { Component } from 'react'

export class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:this.props.color}}>{this.props.name} is awesome, react works!!!!</h1>
      </div>
    )
  }
}

export default WelcomeComponent
