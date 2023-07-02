import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BiUserCircle} from 'react-icons/bi'
import {ImBooks} from 'react-icons/im'
import {GoBriefcase} from 'react-icons/go'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><BiUserCircle/></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><ImBooks/></a>
      <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#services' ? 'active' : '' }><GoBriefcase/></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav