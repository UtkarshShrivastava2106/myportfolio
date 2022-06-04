import React from 'react'
import '../CSS/Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
   <footer>

< a href='#' className='footer__logo'>Utkarsh Shrivastava</a>
<ul className='permalinks'>
<li><a href='#' > Home</a></li>
<li><a href='#' > About</a></li>
<li><a href='#' > Experience</a></li>
<li><a href='#' > Portfolio</a></li>
<li><a href='#' > Contact</a></li>

</ul>
<div className='footer__socials'>
<a href='https://www.facebook.com/dharmendra.shrivastava.16547/'><FaFacebookF/></a>
<a href='https://www.instagram.com/utkarsh21shrivastava/'><FiInstagram/></a>
<a href='https://twitter.com/i/flow/login'><IoLogoTwitter/></a>
</div>

   </footer>
  )
}

export default Footer