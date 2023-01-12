import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// DO NOT USE THE IMAGES IN PRODUTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Assistência médica simplificada para todos - Doctorcare NLW',
    github: 'https://github.com/jardeylsonJacinto/projeto_DoctorCare_NLW',
    demo: '#',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tela de início do chalé hotel',
    github: 'https://github.com/jardeylsonJacinto/projeto-chale-hotel',
    demo: '#',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Música pata todos - réplica do Spotify',
    github: 'https://github.com/jardeylsonJacinto/Spotify_estudo',
    demo: '#',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Jogo de matar o mosquito',
    github: 'https://github.com/jardeylsonJacinto/game_matar_mosquito',
    demo: '#',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Todo list em React',
    github: 'https://github.com/jardeylsonJacinto/project-todoList-react',
    demo: '#'
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a title for the poster',
    github: '',
    demo: ''
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recenter</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel='noreferrer' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;