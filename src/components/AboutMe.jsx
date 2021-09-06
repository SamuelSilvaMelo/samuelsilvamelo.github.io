import React from 'react';
import '../style/components/AboutMe.css'
import hobbies from '../img/hobbies-transparente.png'
import airplane from '../img/aviao-sem-fundo.png';
import DownArrow from './common/DownArrow';
import Tilt from 'react-parallax-tilt';

const AboutMe = () => (
  <section className="about-me" id="about">
    <article className="about-me-article-content">
      <div className="hobbies-img">
        <Tilt>
          <img src={ hobbies } alt=""/>
        </Tilt>
      </div>
      <div className="about-me-div-content">
          <div className="about-me-text">
              <p>Olá, meu nome é Samuel Melo, tenho 22 anos, moro em Belo Horizonte e encontro-me atualmente estudando Desenvolvimento Web Full Stack na Trybe.</p>
              <p>Nos meus momentos livres adoro fazer novos projetos, jogar videogame, conversar e estudar sobre o mundo da aviação assim como ir ao aeroporto para ver os aviões.</p>
              <p>Minhas três paixões estão na aviação, em criar novos códigos e jogar videogame.</p> 
          </div>
          <Tilt className="airplane-img">
            <img src={ airplane} alt="" />
          </Tilt>
      </div>
    </article>
    <DownArrow location="#skills" />
  </section>
);

export default AboutMe;
