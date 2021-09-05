import React, { useState } from 'react';
import '../../style/common/navBar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <FaIcons.FaBars className="menu-bars" onClick={ handleSideBar } />
      <Modal
        className="nav-menu"
        isOpen={ sideBar }
        onRequestClose={ handleSideBar }
      >
        <AiIcons.AiOutlineClose className="close-menu" onClick={ handleSideBar }/>
        <a
          className="about-anchor"
          href="#about"
          onClick={ handleSideBar }
        >
          Sobre mim
        </a>
        <a
          className="skills-anchor"
          href="#skills"
          onClick={ handleSideBar }
        >
          Habilidades
        </a>
        <a
          className="projects-anchor"
          href="#projects"
          onClick={ handleSideBar }
        >
          Projetos
        </a>
        <a
          className="contact-anchor"
          href="#contact"
          onClick={ handleSideBar }
        >
          Contato
        </a>
      </Modal>
    </>
  )
};

export default NavBar;
