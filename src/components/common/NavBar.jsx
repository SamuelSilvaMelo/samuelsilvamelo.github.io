import React, { useState } from 'react';
import '../../style/common/navBar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
        <Link className="about-anchor" to="#about">Sobre mim</Link>
        <Link className="skills-anchor" to="#skills">Habilidades</Link>
        <Link className="projects-anchor" to="#projects">Projetos</Link>
        <Link className="contact-anchor" to="#contact">Contato</Link>
      </nav>
    </>
  )
};

export default NavBar;
