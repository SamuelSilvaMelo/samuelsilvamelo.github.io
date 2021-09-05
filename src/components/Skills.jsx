import React from 'react';
import '../style/components/skills.css'
import SkillCard from './common/SkillCard';
import purpleHeart from '../img/purple-heart.png'

const Skills = () => {
  return (
    <section className="my-skills-section" id="skills">
      <article className="my-skills-article">
        <h1>Minhas Habilidades</h1>
        <p>
          Estou estudando sobre o mundo do Desenvolvimento Web desde março de 2021, quando conheci a Trybe.
        </p>
        <p>
          Ao lado estou citando algumas tecnologias que já aprendi, caso tenha curiosidade clique em cima para saber um pouco mais.
          <span>
            <img className="my-skills-purple-heart" src={ purpleHeart } alt=""/>
          </span>
        </p>
      </article>
      <article className="my-skills-info">
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/bash/bash-original.svg"
          imgAlt="Bash-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/git/git-plain.svg"
          imgAlt="Git-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/github/github-original.svg"
          imgAlt="GitHub-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/html5/html5-original.svg"
          imgAlt="HTML-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/css3/css3-original.svg"
          imgAlt="CSS-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/javascript/javascript-plain.svg"
          imgAlt="JavaScript-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/jest/jest-plain.svg"
          imgAlt="Jest-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/react/react-original.svg"
          imgAlt="React.js-Logo"
        />
        <SkillCard
          imgPath="https://i.imgur.com/wbRSD1i.png"
          imgAlt="RTL-Logo"
        />
        <SkillCard
          imgPath="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/redux/redux-original.svg"
          imgAlt="Redux-Logo"
        />
      </article>
    </section>
  );
};

export default Skills;
