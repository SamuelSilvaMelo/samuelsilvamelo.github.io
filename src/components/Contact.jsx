import React from 'react';
import '../style/components/contact.css';
import contactData from '../data/contact-data';
import ContactBtn from './common/ContactBtn';
import { tinCanPhone } from '../img'
import Tilt from 'react-parallax-tilt';

const Contact = () => (
  <section className="contact-content" id="contact">
    <h1 data-aos="fade-down">Contato</h1>
    <p data-aos="fade-down">Gostou do meu trabalho ou ficou com alguma dúvida? Por favor, entre em contato!</p>
    <div className="contact-btns-content">
      {
        contactData.map(({ link, img, name }) => (
          <ContactBtn
            key={ name }
            link={ link }
            img={ img }
            name={ name }
          />
        ))
      }
    </div>
    <Tilt className="tin-can-phone">
      <img
        data-aos="fade-down"
        src={ tinCanPhone }
        alt="Telefone Sem Fio"
      />
    </Tilt>
  </section>
);

export default Contact;
