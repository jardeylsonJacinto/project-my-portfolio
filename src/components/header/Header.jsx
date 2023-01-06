import React from 'react';
import './Header.css';

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header id='index'>
      <div className="container header__container">
        <h4>Olá! eu sou</h4>
        <h1>Jardeylson Jacinto</h1>
        <h4 className="text-light">Engenheiro de Software</h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Perfil" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;