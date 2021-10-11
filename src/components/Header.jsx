import React from 'react';
import '../style/components/header.css'
import { Link } from 'react-router-dom';
import { logo } from '../img'
import NavBar from './common/NavBar';

const Header = () => (
  <header className="main-header" id="home">
    <div className="nav-header">
      <Link className="logo-anchor" to="#home">
          <img src={ logo } alt="Airplane icon with heart on the left side" />
      </Link>
      <NavBar />
    </div>
  </header>
);

export default Header;
