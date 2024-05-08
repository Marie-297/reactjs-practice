import React, { Component } from 'react';

class Connect extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-12 col-md-12 col-xs-12 d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: '30px', paddingBottom: '30px', marginTop: '5px', backgroundImage: 'url(../HTML/images/bgimage10.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', fontWeight: 'bolder' }}>
          <h1 style={{ fontWeight: 'bolder' }}>Connect with Us</h1>
          <p>Sign up for our Newsletter & get Amazing Offers</p>
          <p>Send Us Your Email Address and press the Subscribe Button to Sign Up</p>
          <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="email" style={{ fontSize: '25px' }}>Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" style={{ width: '300px', borderRadius: '40px', height: '50px', paddingLeft: '20px' }} />
            <button className="btn subscribe-button" type="submit" value="submit" style={{ backgroundColor: 'darkred', color: 'white', width: '150px', borderRadius: '40px', height: '50px' }}>Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Connect;
