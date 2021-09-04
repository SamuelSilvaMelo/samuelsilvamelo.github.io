import React from 'react';
import '../style/components/home.css';
import DownArrow from './common/DownArrow';

const Home = () => (
  <>
    <div className="welcome-page">
      <h3>Olá, me chamo</h3>
      <h1>Samuel Melo.</h1>
      <h3>Estudante de desenvolvimento Web Full-Stack!</h3>
      <DownArrow />
    </div>
  </>
);

export default Home;
