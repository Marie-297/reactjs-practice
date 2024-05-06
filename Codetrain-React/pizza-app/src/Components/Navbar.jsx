import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg sticky-lg-top sticky-md-top sticky-sm-top bg-body-tertiary">
          <div className="container-fluid navv">
            <a className="navbar-brand" href="#" style={{color: "white"}}>
              <img src="../Images/Capture.PNG" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
              Marie's Pizza
            </a>
            
            <form className="d-flex mx-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav nav-underline ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <li className="header-book-btn">
                  <a href="" className="btn btn-primary" style={{backgroundColor: 'white', color: 'black' ,width: '200px'}}>Order Here</a>
                </li>
              
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{color: 'white'}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="aboutpizza.html" style={{color: 'white'}}>About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="menupizza.html" style={{color: 'white'}}>Menu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contactpizza.html" style={{color: 'white'}}>Contact Us</a>
                </li>
              </ul>
              
              
            </div>
          </div>
          
        </nav>
      </div>
    )
  }
}

export default Navbar
