import React from 'react'
import '../CSS/About.css'
import myimage from '../assets/mycloseup.jpg';

import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import {HiDesktopComputer} from 'react-icons/hi';
const About = () => {
  return (
   <>
   <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>
   <div className="about__container">
<div className="about__me">
  <div className="about__me-image">
<img src={myimage} alt='img'/>
  </div>
</div>
<div className="about__content">
  <div className="about__cards">
    <article className='about__card'>
      <FaAward className='about__icon'/>
      <h5>Experience</h5>
      <small>2+ Years working with web technologies</small>
    </article>
    <article className='about__card'>
      <HiDesktopComputer className='about__icon'/>
      <h5>Programming Experience</h5>
      <small>Frontend Languages:HTML,CSS,Javascript,ReactJs </small>
      <small>Backend Languages:NodeJs,ExprssJs, JSP and Servlets </small>
      <br/>
      <small>Programming Languages:Java (Core+Advance),C++,C</small>
    </article>
    <article className='about__card'>
      <VscFolderLibrary className='about__icon'/>
      <h5>Projects</h5>
      <small>45+ web projects, in which 2 projects are major one.</small>
    </article>
   
</div>
{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati qui ab explicabo mollitia nesciunt commodi accusantium cum possimus quidem, deleniti, eum sed culpa dignissimos omnis recusandae eaque maiores doloremque?</p> */}
   </div>
   </div>
   </section>

   </>
  )
}

export default About
