import React from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { GoBook } from 'react-icons/go'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessages } from 'react-icons/tb'



const Nav = () => {
  return (
    <nav>
      <a href="a" ><BiHome /></a>
      <a href="#about"><BiUser /></a>
      <a href="#experience"><GoBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><TbMessages /></a>

    </nav>
  )
}

export default Nav;