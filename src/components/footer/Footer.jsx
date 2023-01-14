import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';

const Footer = () => {
  return (
    <footer>
      <a href="##" className="footer__logo">Jardeylson Jacinto.</a>
      <ul className="permalinks">
        <li><a href="##">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://linkedin.com"><ImLinkedin2 /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jardeylson Jacinto</small>
      </div>
    </footer>
  )
}

export default Footer;