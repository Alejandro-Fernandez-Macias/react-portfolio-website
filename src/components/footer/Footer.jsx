import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Alejandro Fernandez</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/alejandro-fernandez-704730222/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Alejandro-Fernandez-Macias" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/alejandro.fernandez.311" target='_blank'><AiFillFacebook/></a>
        <a href="https://www.instagram.com/aleeandro_/" target='_blank'><FiInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Alejandro Fernandez. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer