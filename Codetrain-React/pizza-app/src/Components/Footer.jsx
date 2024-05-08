import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="row footers">
            <div className="col d-flex" style={{ flexDirection: 'column', paddingLeft: '20px', rowGap: '10px' }}>
              <h5>Call us/Order your Pizza Now</h5>
              <h6 style={{ backgroundColor: 'yellow', color: 'black', textAlign: 'center', width: 'fit-content' }}>0500551566/0554550000</h6>
              <h5>Or for More Enquiries, Call/Whatsapp Us On</h5>
              <h6 style={{ backgroundColor: 'yellow', color: 'black', width: 'fit-content' }}>0500551566/0554550000</h6>
            </div>

            <div className="col socialmedia">
              <h3>Connect With Us</h3>
              <div>
                <a href="#" style={{ fontWeight: 'bolder' }}><img src="../src/Images/Facebook icon.png" alt="" style={{ width: '40px', height: '40px', border: '5px', marginRight: '20px' }} /></a>
                <a href="#" style={{ fontWeight: 'bolder' }}><img src="../src/Images/instagram icon.webp" alt="" style={{ width: '40px', height: '40px', border: '5px', marginRight: '20px' }} /></a>
                <a href="#" style={{ fontWeight: 'bolder' }}><img src="../src/Images/twitter logo.png" alt="" style={{ width: '40px', height: '40px', border: '5px' }} /></a>
              </div>
            </div>

            <div className="col d-flex promo">
              <h2>Promotions</h2>
              <h4>No Promotions Yet</h4>
              <p className="text-secondary">Updated 3hours ago</p>
            </div>

            <div className="col workinghrs">
              <h4>Working Hours</h4>
              <br />
              <h7>Mondays - Fridays</h7>
              <h7>10:00am - 10:00pm</h7>
              <br />
              <h7>Saturdays - Sundays & Holidays</h7>
              <h7>9:00am - 12:00am</h7>
            </div>
          </div>
          <br /><hr style={{ color: 'white' }} />
          <div className="d-flex" style={{ justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bolder' }}>
            <p>All Rights Reserved</p>
            <p>&lt;&lt;&lt;&copy;2024Marie's Pizza&gt;&gt;&gt;</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
