import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Avaliação de Experiência e Usabilidade; </p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Gamificação;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Arquitetura da Informação;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Prototipagem;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Prototipação de wireframes;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Design Web;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Design Mobile;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Análise de Briefing.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento WEB</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Site Institucional;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Site Dinâmico;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Blogs;</p>
            </li>
            
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Loja virtual / E-commerce;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Sites one page;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Landing pages;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Sites de conteúdo;</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Portal de conteúdo.</p>
            </li>
          </ul>
        </article>
        {/* END OF DESENVOLVIMENTO WEB */}

        <article className="service">
          <div className="service__head">
            <h3>Criação de Conteúdo</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Analise das metodologias SCRUM e KANBAN para o gerenciamento de projetos.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATE */}
      </div>
    </section>
  )
}

export default Services;