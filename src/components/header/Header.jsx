import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-sf-bridge.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alejandro Fernandez</h1>
        <h5 className="text-light">An Aspiring Fullstack Software Developer</h5>
        <CTA/>
        <HeaderSocials/>


        <div className="me">
          <img className='me_img' src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header