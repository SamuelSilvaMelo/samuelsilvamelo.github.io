import React from 'react';
import '../style/components/AboutMe.css'
import hobbies from '../img/hobbies-transparente.png'
import airplane from '../img/aviao-sem-fundo.png';

const AboutMe = () => (
  <section className="about-me" id="about">
    <div className="hobbies-img">
        <img src={ hobbies } alt=""/>   
    </div>
    <div className="about-me-div-content">
        <div className="about-me-text">
            <p>Olá, meu nome é Samuel Melo, tenho 22 anos, moro em Belo Horizonte e encontro-me atualmente estudando Desenvolvimento Web Full Stack na Trybe.</p>
            <p>Nos meus momentos livres adoro fazer novos projetos, jogar videogame, conversar e estudar sobre o mundo da aviação assim como ir ao aeroporto para ver os aviões.</p>
            <p>Minhas três paixões estão na aviação, em criar novos códigos e jogar videogame.</p> 
        </div>
        <img className="airplane-img" src={ airplane} alt="" />
    </div>
  </section>
);

export default AboutMe;
