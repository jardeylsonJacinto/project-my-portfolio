import React from 'react';
import './footer.css';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="##" className="footer__logo">Jardeylson</a>
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
        <a href="https://facebook.com"><ImFacebook2 /></a>
        <a href="https://instagram.com"><FaInstagramSquare /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jardeylson Jacinto</small>
      </div>
    </footer>
  )
}

export default Footer;