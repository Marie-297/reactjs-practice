import React, { Component } from 'react'

class CardFour extends Component {
  render() {
    return (
      <div>
        <div className="card card-1">
          <img src={this.props.srcName} style={{ height: '300px' }} className="card-img-top img-fluid rounded" alt="Pizza" />
          <div className="card-body">
            <p className="card-text" style={{ fontSize: '20px', color: 'darkred', fontStyle: 'italic' }}>{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CardFour
