import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import SkillsToLearn from '../components/SkillsToLearn';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MainPage = () => (
  <>
    <Header />
    <Home />
    <AboutMe />
    <Skills />
    <SkillsToLearn />
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default MainPage;
