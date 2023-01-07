import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Conhecer</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre a imagem" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>1+ Anos Trabalhando</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>5+ Clientes Nacionais</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>15+ Projetos completos</small>
            </article>
          </div>
          <p>Oi! <br />

            Estou me formando em ciências da computação pela UEPB. Onde eu iniciei a minha imersão no mundo da programação ao qual venho me especializando diariamente no desenvolvimento de aplicações webs. Atualmente faço parte de uma empresa Jr. chamada Knex a qual eu e uns amigos estamos nos dedicando muito, adquirindo conhecimentos e experiências em projetos reais. <br />

            Eu sou apaixonado pelo back-end e atualmente estou em processo de especialização em javascript nodejs. Sou uma pessoa curiosa e costumo fazer muitas perguntas se me encontro com dúvidas. Cotidianamente eu sigo trabalhando na minha melhor versão, e uma frase que levo sempre comigo, é a seguinte: "Viva como um eterno aprendiz.". Pois, acredito que independente da idade, da especialização ou da formação... alguém sempre tem algo a nos ensinar.</p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar?</a>
        </div>
      </div>

    </section>
  )
}

export default About;