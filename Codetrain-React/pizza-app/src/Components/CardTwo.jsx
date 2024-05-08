import React, { Component } from 'react';

class CardTwo extends Component {
  render() {
    return (
      <div> 
        <div className="card text-center" style={{ backgroundColor: 'yellow', width: '100', height: '100%', border:'transparent', borderRadius: '10px' }}>
          <div className="card-header pizza-logo">
            <img src="../src/Images/Capture.PNG" alt="Pizza Logo" width="50px" height="50px" style={{ borderRadius: '25px' }} />
          </div>
          <div className="card-body">
            <div>
              <h5 className="card-title haa" style={{ color: 'white' }}>Avoid Scam!!!</h5>
            </div>
            <p className="card-text" style={{ fontWeight: 'bold', color: 'darkred' }}>Don't send any money to any number aside our momo number</p>
            <p style={{ fontWeight: 'bold', color: 'darkred' }}>Keep track of our social media platforms or follow us on our media accounts</p>
            <a href="#" className="btn btn-primary" style={{ backgroundColor: 'darkred', color: 'white' }}>Marie's Pizza</a>
          </div>
          <div className="card-footer text-secondary" style={{ fontWeight: 'bold' }}>
            Call Us/ Whatsapp Us on <em style={{ color: 'brown' }}>0554550000</em>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTwo;
