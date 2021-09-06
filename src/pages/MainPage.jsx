import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import SkillsToLearn from '../components/SkillsToLearn';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTopBtn from '../components/common/ScrollToTopBtn';

const MainPage = () => (
  <>
    <Header />
    <main>
      <Home />
      <AboutMe />
      <Skills />
      <SkillsToLearn />
      <Projects />
      <Contact />
    </main>
    <ScrollToTopBtn />
    <Footer />
  </>
);

export default MainPage;
