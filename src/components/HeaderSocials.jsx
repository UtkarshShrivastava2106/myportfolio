import React from 'react'
import '../CSS/Header.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials" >
          <a href='#' target="_blank"><BsLinkedin/></a>
          <a href='#' target="_blank"><BsGithub/> </a>
      </div>
    </div>
  )
}

export default HeaderSocials
