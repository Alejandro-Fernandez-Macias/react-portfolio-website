import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'




const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/alejandro-fernandez-704730222/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Alejandro-Fernandez-Macias" target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href="https://www.instagram.com/aleeandro_/" target="_blank" rel='noreferrer'><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials