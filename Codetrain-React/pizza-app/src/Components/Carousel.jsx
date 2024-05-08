import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: '500px' }}>
              <video className="img-fluid" autoPlay loop muted style={{ height: '100%', width: '100vw'}}>
                <source src="../src/Images/pizzacarouselvid1.webm" type="video/mp4"/>
              </video>
              <div className="carousel-caption d-none d-md-block" style={{ color: 'darkred' }}>
                <h5>Pizza Making</h5>
                <p>Our delicious Pizza in the making process.......</p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: '500px' }}>
              <img src="../src/Images/pizzaimgcarousel.jpg" className="d-block w-100" alt="..." style={{ height: '100%' }} />
              <div className="carousel-caption d-none d-md-block" style={{ color: 'darkred' }}>
                <h5>Setup</h5>
                <p>Our Pizza brings lots and lots of love and lights up the mood</p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: '500px' }}>
              <video className="img-fluid" autoPlay loop muted style={{ height: '100%' }}>
                <source src="../src/Images/pizzacarouselvid2.webm" type="video/mp4" />
              </video>
              <div className="carousel-caption d-none d-md-block" style={{ color: 'darkred' }}>
                <h5>Pizza Night</h5>
                <p>A slice can go a long way of sparking your day...</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
