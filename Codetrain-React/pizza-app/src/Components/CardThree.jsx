import React, { Component } from 'react';

export class CardThree extends Component {
  render() {
    return (
      <div>
        <img src={this.props.srcName} alt="" className="img-fluid" style={{ width: '100%', height: '100%', padding: 0 }} />
      </div>
    );
  }
}

export default CardThree;
