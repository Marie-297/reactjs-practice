import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';
import Iphone from '../assets/Iphone.webp'
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
            <div className="description">
              <Description description='The Description goes here'/>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='img'>
            <Image image={Iphone}/>
          </div>
          <div className="details">
            <Title className='title' title='IPHONE 15 PRO-MAX'/>
            <div className="description">
              <Description description='Apple iPhone 15 Pro; CPU, Hexa-core (2x3.78 GHz + 4x2.11 GHz) ; GPU, Apple GPU (6-core graphics) ; Internal, 128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB ...The iPhone 15 Pro Max features a 5x 120mm telephoto lens, providing more reach and creative photography options.'/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SimpleCard
