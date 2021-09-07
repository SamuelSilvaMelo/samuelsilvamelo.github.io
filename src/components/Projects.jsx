import React from 'react';
import '../style/components/projects.css';
import DownArrow from './common/DownArrow';
import ProjectCard from './common/ProjectCard';

const Projects = () => (
  <section className="project-content" id="projects">
    <h1 data-aos="fade-down">Projetos</h1>
    <article className="project-article-content">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </article>
    <DownArrow location="#contact"/>
  </section>
);

export default Projects;
