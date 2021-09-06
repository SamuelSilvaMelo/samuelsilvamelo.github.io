import React, { useState } from 'react';
import '../../style/common/navBar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Modal from 'react-modal';
import navBarOptions from '../../data/nav-bar-options';

Modal.setAppElement('#root');

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <FaIcons.FaBars className="menu-bars" onClick={ handleSideBar } />
      <Modal
        className="nav-menu mobile"
        isOpen={ sideBar }
        onRequestClose={ handleSideBar }
      >
        <AiIcons.AiOutlineClose className="close-menu" onClick={ handleSideBar }/>
        {
          navBarOptions.map(({ option, href }) => (
            <a
              className="nav-option"
              href={ href }
              key={ option }
              onClick={ handleSideBar }
            >
              { option }
            </a>
          ))
        }
      </Modal>
      <nav className="nav-menu desktop">
        {
          navBarOptions.map(({ option, href }) => (
            <a
              className="nav-option"
              href={ href }
              key={ option }
            >
              { option }
            </a>
          ))
        }
      </nav>
    </>
  )
};

export default NavBar;
