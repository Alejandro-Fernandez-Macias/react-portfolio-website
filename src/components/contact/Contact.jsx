import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_16l2sok', 'template_s03iny3', form.current, 'FMLpntZ6L68ULhgNW')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMarkEmailRead className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>afpato3@gmail.com</h5>
            <a href="mailto:afpato3@gmail.com" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Alejandro Fernandez</h5>
            <a href="https://m.me/alejandro.fernandez.311" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1-559-412-6938</h5>
            <a href="https://api.whatsapp.com/send?phone=15594126938" target='_blank' rel='noreferrer'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="name" placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact