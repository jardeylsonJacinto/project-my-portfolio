import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, quae voluptatem itaque nisi corrupti rem repellendus ipsam deleniti aspernatur iste? Provident natus corrupti vero eveniet ullam temporibus perspiciatis iste.',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, quae voluptatem itaque nisi corrupti rem repellendus ipsam deleniti aspernatur iste? Provident natus corrupti vero eveniet ullam temporibus perspiciatis iste.',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, quae voluptatem itaque nisi corrupti rem repellendus ipsam deleniti aspernatur iste? Provident natus corrupti vero eveniet ullam temporibus perspiciatis iste.',
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, quae voluptatem itaque nisi corrupti rem repellendus ipsam deleniti aspernatur iste? Provident natus corrupti vero eveniet ullam temporibus perspiciatis iste.',
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O que os clientes estão dizendo</h5>
      <h2>Depoimentos</h2>

      <div className="container testimonials__container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials;