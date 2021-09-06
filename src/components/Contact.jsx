import React from 'react';
import '../style/components/contact.css';
import contactData from '../data/contact-data';
import ContactBtn from './common/ContactBtn';
import tinCanPhone from '../img/tin-can-phone.png'

const Contact = () => (
  <section className="contact-content" id="contact">
    <h1>Contato</h1>
    <p>Gostou do meu trabalho ou ficou com alguma dúvida? Por favor, entre em contato!</p>
    <div className="contact-btns-content">
      {
        contactData.map(({ link, img, name }) => (
          <ContactBtn
            link={ link }
            img={ img }
            name={ name }
          />
        ))
      }
    </div>
    <div className="tin-can-phone">
      <img
        src={ tinCanPhone }
        alt="Telefone Sem Fio"
      />
    </div>
  </section>
);

export default Contact;
