import React from 'react';
import './experience.css'
import { BsCheck2Circle } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quais as minhas Habilidades</h5>
      <h2>Minha Experiência</h2>

      <div className="container experience__container">

        {/* INICIO do FRONT */}
        <div className="experience__frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light"> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light"> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className="text-light"> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>JQuary</h4>
                <small className="text-light"> Intermediário </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light"> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light"> Intermediário </small>
              </div>
            </article>
          </div>
        </div>
        {/* FIM do FRONT */}

        {/* INICIO do BACK */}
        <div className="experience__backend">
          <h3>Desenvolvimento Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light"> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Express</h4>
                <small className="text-light"> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Typescript</h4>
                <small className="text-light"> Experiente </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"> Intermediário </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light"> Básico </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheck2Circle className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"> Básico </small>
              </div>
            </article>
          </div>
        </div>
        {/* FIM do BACK */}

      </div>
    </section>
  )
}

export default Experience;