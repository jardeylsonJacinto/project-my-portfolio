import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';





const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jardeylson-jacinto-769769156" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/jardeylsonJacinto" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocials