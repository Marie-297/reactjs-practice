import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import Welcomepage from './Components/Welcomepage'
import Billboard from './Components/Billboard'
import Connect from './Components/Connect'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Welcomepage />
      <Billboard />
      <Connect />
      <Footer />
    </div>
  )
}

export default App
