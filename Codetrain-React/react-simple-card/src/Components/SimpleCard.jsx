import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';
class SimpleCard extends Component {
  render() {
    return (
      <>
        <div className='card'>
          <div className='img'>
            <Image image="IMG"/>
          </div>
          <div className="details">
            <Title className='title' title='TITLE'/>
            <Description className='description' description='The Description goes here'/>
          </div>
        </div>
        <div className='card'>
          <div className='img'>
            <Image image="IMG"/>
          </div>
          <div className="details">
            <Title className='title' title='TITLE'/>
            <Description className='description' description='The Description goes here'/>
          </div>
        </div>
      </>
    )
  }
}

export default SimpleCard
