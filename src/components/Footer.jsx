import React from 'react'
import '../CSS/Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
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
<a href='https://www.linkedin.com/in/utkarsh-shrivastava-90459a1aa/'><AiFillLinkedin/></a>
<a href='https://github.com/UtkarshShrivastava2106'><AiFillGithub/></a>
</div>

   </footer>
  )
}

export default Footer