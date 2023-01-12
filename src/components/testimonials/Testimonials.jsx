import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O que os clientes estão dizendo</h5>
      <h2>Depoimentos</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className='client__name'>Ernest Achiecer</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quidem animi magni at sunt. A, magnam aspernatur repudiandae eos ex veniam perferendis aut, dolor saepe quis repellendus asperiores doloremque? Unde!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className='client__name'>Ernest Achiecer</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quidem animi magni at sunt. A, magnam aspernatur repudiandae eos ex veniam perferendis aut, dolor saepe quis repellendus asperiores doloremque? Unde!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials;