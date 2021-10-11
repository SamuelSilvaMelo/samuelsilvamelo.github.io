import React from 'react';
import '../style/components/projects.css';
import DownArrow from './common/DownArrow';
import ProjectCard from './common/ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <section className="project-content" id="projects">
    <h1 data-aos="fade-down">Projetos</h1>
    <article className="project-article-content">
      {
        projects.map(({ title, img, link, repo }) => (
          <ProjectCard
            key={title}
            title={ title }
            img={ img }
            link={ link }
            repo={ repo }
          />
        ))
      }
    </article>
    <DownArrow location="#contact"/>
  </section>
);

export default Projects;
