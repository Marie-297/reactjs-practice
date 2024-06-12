import React from 'react'
import snapchat from '../Images/snapchat.svg'
import tiktok from '../Images/tiktok.svg'
import facebook from '../Images/facebook.svg'
import twitter from '../Images/twitter.svg'
import instagram from '../Images/instagram.svg'

function Footer() {
  return (
    <div className='footer'>
      <p> &copy; 2024 @Marie. All rights reserved.</p>
      <img src={snapchat} alt="snapchat" />
      <img src={tiktok} alt="tiktok" />
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
    </div>
  )
}

export default Footer
