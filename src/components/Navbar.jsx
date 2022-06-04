import React from 'react'
import "../CSS/Navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {
  const [activeNav, setactiveNav] = useState('#')
  return (
    <>
    <nav>
<a href='# ' onClick={()=>setactiveNav('#')} className={activeNav=='#' ? 'active':''}><AiOutlineHome/></a>
<a href='#about'  onClick={()=>setactiveNav('about')} className={activeNav=='#about' ? 'active':''}><FaUserTie/></a>
<a href="#experience"  onClick={()=>setactiveNav('#experience')} className={activeNav=='#experience' ? 'active':''}><BiBook/></a>
<a href="#services"  onClick={()=>setactiveNav('#services')} className={activeNav=='#services' ? 'active':''}><RiServiceLine/></a>
<a href="#contact"  onClick={()=>setactiveNav('#contact')} className={activeNav=='#contact' ? 'active':''}><BiMessageSquareDetail/></a>

    </nav>
    </>
  )
}

export default Navbar
