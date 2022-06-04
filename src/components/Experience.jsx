import React from 'react'
import '../CSS/Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
   <>
    <section id='experience'>
<h5>What skills I have</h5>
<h2>My Experience</h2>
<div className="experience__container">
<div className="experience__frontend">
  <h3>Front Development</h3>
  <div className="experience__content">
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
     <div>
      <h4>HTML</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
     <div>
     <h4>CSS</h4>
      <small className='text-light'>Experienced</small>
     </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
    <div>
    <h4>Javascript</h4>
      <small className='text-light'>Intermediate</small>
    </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
     <div>
     <h4>Bootstrap</h4>
      <small className='text-light'>Experienced</small>
     </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
     <div>
     <h4>UI/UX Development</h4>
      <small className='text-light'>Intermediate</small>
     </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
      <div>
      <h4>ReactJs</h4>
      <small className='text-light'>Intermediate</small>
      </div>
    </article>
  </div>
</div>
<div className="experience__backend">
  <h3>Backend Development</h3>
<div className="experience__content">
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
     <div>
     <h4>NodeJs</h4>
      <small className='text-light'>Intermediate</small>
     </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
     <div>
     <h4>ExpressJs</h4>
      <small className='text-light'>Intermediate</small>
     </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
     <div>
     <h4>MongoDb</h4>
      <small className='text-light'>Intermediate</small>
     </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
      <div>
      <h4>MySQL</h4>
      <small className='text-light'>Experienced</small>
      </div>
    </article>
    <article className='experience__deatils'>
      <BsPatchCheckFill className='experience__details-icons'/>
      <div>
      <h4>JSP and Servlets</h4>
      <small className='text-light'>Intermediate</small>
      </div>
    </article>
   
  </div>

</div>
</div>

    </section>
   </>
  )
}

export default Experience
