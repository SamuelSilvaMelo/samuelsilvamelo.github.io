import React, { useState } from 'react';
import '../../style/common/navBar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const NavBar = () => {
  const [sideBar, setSideBar] = useState(true);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="nav-bar">
        <FaIcons.FaBars className="menu-bars" onClick={ showSideBar } />
      </div>
      <nav className={ sideBar ? 'nav-menu disabled' : 'nav-menu' }>
        <AiIcons.AiOutlineClose className="close-menu" onClick={ showSideBar }/>
        <a className="about-anchor" href="#about">Sobre mim</a>
        <a className="skills-anchor" href="#skills">Habilidades</a>
        <a className="projects-anchor" href="#projects">Projetos</a>
        <a className="contact-anchor" href="#contact">Contato</a>
      </nav>
    </>
  )
};

export default NavBar;
