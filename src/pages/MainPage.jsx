import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import SkillsToLearn from '../components/SkillsToLearn';
import Projects from '../components/Projects';

const MainPage = () => (
  <div>
    <Header />
    <Home />
    <AboutMe />
    <Skills />
    <SkillsToLearn />
    <Projects />
  </div>
);

export default MainPage;
