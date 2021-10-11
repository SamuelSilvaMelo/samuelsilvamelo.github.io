import React from 'react';
import '../../style/common/projectCard.css';
import { redirect, whiteGitHubLogo } from '../../img';

const ProjectCard = ({ title, img, link, repo }) => (
  <div className="project-card" data-aos="fade-down">
    <h3>{ title }</h3>
    <img src={ img } alt={ `${title} logo`} />
    <div>
      <a
        href={ repo }
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ whiteGitHubLogo }
          alt={ `Redirect to ${title} GitHub`}
        />
      </a>
      <a
        href={ link }
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={ redirect }
          alt={ `Redirect to ${title} site`}
        />
      </a>
    </div>
  </div>
);

export default ProjectCard;
