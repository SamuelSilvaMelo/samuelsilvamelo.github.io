import React from 'react';
import '../style/components/header.css'
import logo from '../img/logo.png'

const Header = () => (
  <header className="main-header">
    <nav className="nav-header">
      <div>
        <a className="logo-anchor" href="home">
            <img src={ logo } alt="Airplane icon with heart on the left side" />
        </a>
      </div>
      <div>
        <a className="about-anchor" href="#about">Sobre mim</a>
        <a className="skills-anchor" href="#skills">Habilidades</a>
        <a className="projects-anchor" href="#projects">Projetos</a>
        <a className="contact-anchor" href="#contact">Contato</a>
      </div>
    </nav>
  </header>
);

export default Header;
