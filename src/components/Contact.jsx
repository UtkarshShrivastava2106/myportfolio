import React ,{ useRef } from 'react'
import '../CSS/Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvddnda', 'service_gvddnda', form.current, 'R3Pb6NVsOy76pX7zy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <section id='contact'>
   <h5>Get In Touch</h5>
   <h2>Contact Me</h2>

   <div className='contact__container'>
     <div className="contact__options">
       <article className='contact__option'>
         <MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>dummyname@gmail.com</h5>
<a href='mailto:utkarshshrivastava.ujn@gmail.com' target="_blank">Send a Message</a>
       </article>
       <article className='contact__option'>
         <RiMessengerLine className='contact__option-icon'/>
<h4>Messager</h4>
<h5>Utkarsh Shrivastava</h5>
<a href='https://www.facebook.com/dharmendra.shrivastava.16547/'>Send a Message</a>
       </article>
       <article className='contact__option'>
         <BsWhatsapp className='contact__option-icon'/>
<h4>Whatsapp</h4>
<h5>+123456789</h5>
<a href='https://api.whatsapp.com/send?phone=7000657220'>Send a Message</a>
       </article>
     </div>
  
<form ref={form}  onSubmit={sendEmail} > 
<input type="text" name='name' placeholder='Your Full Name' required/>
<input type="email" name="email" placeholder= "Your Email" required/>
<textarea name="message" rows="7" placeholder="Your Message" required></textarea>
<button type='submit' className="btn-primary">Send Message</button>
</form>
</div>
    </section>
    </>
  )
} 

export default Contact
