import React from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { GoBook } from 'react-icons/go'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessages } from 'react-icons/tb'
import { useState } from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#index" onClick={() => setActiveNav('#')} className={activeNav === '#index' ? 'active' : ''}><BiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GoBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessages /></a>

    </nav>
  )
}

export default Nav;