import React from 'react';
import '../../style/common/projectCard.css';
import loading from '../../img/loading.png'

const ProjectCard = () => (
  <div className="project-card" data-aos="fade-down">
    <h3>Em Breve</h3>
    <img src={ loading } alt="" />
  </div>
);

export default ProjectCard;
