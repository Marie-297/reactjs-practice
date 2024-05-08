import React, { Component } from 'react';
import Card from './Card';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import CardFour from './CardFour';
// import Card from './Card';

class Billboard extends Component {
  render() {
    return (
      <div>
        <div style={{ marginLeft: '12px', marginRight: '12px', backgroundColor: 'aliceblue', paddingLeft: '10px', paddingRight: '10px' }}>
          <h1 style={{ textAlign: 'center', color: 'darkred', paddingTop: '30px' }}>Our Pizza Billboard</h1>
          <div className="row row-images">
            <div className="col-lg col-md col-sm-12 col-xs-12 div-images flex-div" style={{backgroundColor: 'yellow'}}>
              <CardTwo />
            </div>
            <div className="col-lg col-md col-sm-12 col-xs-12 div-images" style={{ backgroundColor: 'red' }}>
              <CardThree srcName="../src/Images/pizzadiv1.jpg" />
            </div>
            <div className="col-lg col-md col-sm-12 col-xs-12 div-images" style={{ backgroundColor: 'green' }}>
              <CardThree srcName="../src/Images/pizzadiv3.jpeg" />
            </div>

            <div className="col-lg col-md col-sm-12 col-xs-12">
              <CardFour srcName="../src/Images/pizzadiv4.jpg" text="Our Package meal is a must TRY!." />
            </div>
          </div>

          <div className="row row-images">
            <div className="col-lg col-md col-sm-12 col-xs-12 div-images flex-div">
              <Card srcNameOne="../src/Images/pizzadiv6.jpeg" srcNameTwo="../src/Images/pizzajuicediv7.jpg" />
            </div>


            <div className="col-lg col-md col-sm-12 col-xs-12 div-images" style={{ backgroundColor: 'red' }}>
             <CardThree srcName="../src/Images/Capture 2.PNG"/>
            </div>
          
            <div className="col-lg col-md col-sm-12 col-xs-12 div-images" style={{ backgroundColor: 'black' }}>
              <CardThree srcName="../src/Images/pizzadiv5.jpg" />
            </div>

            <div className="col-lg col-md col-sm-12 col-xs-12">
              <CardFour srcName="../src/Images/pizzadiv2.jpg" text="A SLICE CAN GO A LONG WAY" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Billboard;
