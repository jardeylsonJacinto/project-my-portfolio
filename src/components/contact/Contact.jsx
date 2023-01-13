import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6edub33', 'template_cn5h7ul', form.current, 'KivENasMMtPYPVRzR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Entre em Contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jardeylsong.m@gmail.com</h5>
            <a href="mailto:jardeylsong.m@gmail.com" target="_blank" rel="noreferrer">Envie uma mensagem.</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jardeylson Jacinto</h5>
            <a href="https://m.me/jardeylson.jacinto.5/" target="_blank" rel="noreferrer">Envie uma mensagem.</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 (83) 99817-0254</h5>
            <a href="https://wa.me/send?phone+8399817-0254" target="_blank" rel="noreferrer">Envie uma mensagem.</a>
          </article>
        </div>
        { /*end of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome completo" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea name="message" rows="10" placeholder="Sua mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar mensagem</button>
        </form>
      </div>

    </section>
  )
}

export default Contact;