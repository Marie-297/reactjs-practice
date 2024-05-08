import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.srcNameOne} alt="" style={{ width: '330px', height: '160px' }} />
        </div>
        <div>
          <img src={this.props.srcNameTwo} alt="" style={{ width: '330px', height: '170px' }} />
        </div>         
      </div>
    )
  }
}

export default Card
