import React from 'react';
import '../style/components/AboutMe.css'
import {
  hobbies,
  airplane,
} from '../img';
import DownArrow from './common/DownArrow';
import Tilt from 'react-parallax-tilt';

const AboutMe = () => (
  <section className="about-me" id="about">
    <article className="about-me-article-content">
      <div className="hobbies-img">
        <Tilt>
          <img data-aos="fade-down" src={ hobbies } alt=""/>
        </Tilt>
      </div>
      <div className="about-me-div-content">
          <div data-aos="fade-down" className="about-me-text">
              <p>Olá, meu nome é Samuel Melo, tenho 22 anos, moro em Belo Horizonte e atualmente estou estudando Desenvolvimento Web Full Stack na Trybe.</p>
              <p>Nos meus momentos livres adoro fazer novos projetos, jogar videogame, conversar e estudar sobre o mundo da aviação assim como ir ao aeroporto para ver os aviões.</p>
              <p>Sou uma pessoa extremamente apaixonada com tecnologia e adoro falar sobre o mundo da aviação.</p> 
          </div>
          <Tilt className="airplane-img">
            <img data-aos="fade-down" src={ airplane} alt="" />
          </Tilt>
      </div>
    </article>
    <DownArrow location="#skills" />
  </section>
);


export default AboutMe;
