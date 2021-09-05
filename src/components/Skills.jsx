import React from 'react';
import '../style/components/skills.css'
import SkillCard from './common/SkillCard';
import purpleHeart from '../img/purple-heart.png';
import mySkills from '../data/my-skills';

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
        {
          mySkills.map(({ imgPath, stackName}) => (
            <SkillCard
              imgPath={ imgPath }
              stackName={ stackName }
            />
          ))
        }
      </article>
    </section>
  );
};

export default Skills;
