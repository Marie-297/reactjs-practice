import React from 'react';
import Footer from '../src/Components/Footer'
function AppAbout() {
  return (
    <div>
      <div className="container-fluid">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg sticky-lg-top sticky-md-top sticky-sm-top bg-body-tertiary">
          <div className="container-fluid navv">
            <a className="navbar-brand" href="#" style={{ color: 'white' }}>
              <img src="./logi pizza/Capture.PNG" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
              Marie's Pizza
            </a>

            <form className="d-flex mx-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav nav-underline ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <li className="header-book-btn">
                  <a href="" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'black', width: '200px' }}>Order Here</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="pizza.html" style={{ color: 'white' }}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="menupizza.html" style={{ color: 'white' }}>Menu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contactpizza.html" style={{ color: 'white' }}>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="header">
          <img src="./pizza images/aboutpizzaimage.jpg" className="img-fluid image-h" alt="..." style={{ width: '100%' }} />
          <h1 className="h-image">About Marie's Pizza</h1>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="./pizza images/pizzavariety.webp" className="img-fluid" alt="Pizza Variety" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="hhh">
              <h4 style={{ fontSize: '50px', color: 'darkred' }}>Marie's Pizza</h4>
              <small style={{ fontStyle: 'italic', marginTop: '0' }}>A Slice Can Go a Long Way. Taste it, Enjoy a mouthwatering taste like never before!!!</small>
            </div>
            <div className="para" style={{ marginTop: '50px' }}>
              <p>With Marie's Pizza, we focus on the three Core Values of:</p>
              <ul>
                <li>Great Taste</li>
                <li>Customer Satisfaction</li>
                <li>Excellent & Fast Service</li>
              </ul>
              <p> Marie's Pizza gives you the chance to have your pizza the way you'd like it by allowing you the freedom to customize your own toppings.</p>
              <p>Marie's Pizza has the aim of satisfying your demands and cravings as well as leaving you with an experience that will make you yearn for us with a thought of Pizza.</p>
              <p>We offer delivery, pickup, and dine-in services.</p>
              <p>At Marie's Pizza, it is in our faith that everybody deserves good mouthwatering pizzas that are prepared under good hygienic conditions and with healthy ingredients.</p>
            </div>
          </div>
        </div>

        {/* Pizza Types */}
        <div style={{ paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'yellow' }}>
          <h1 className="text-center" style={{ color: 'darkred', marginBottom: '20px' }}>Our Pizza Types</h1>
          <div className="row pizzatypes">
            {/* Pizza Cards */}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default AppAbout