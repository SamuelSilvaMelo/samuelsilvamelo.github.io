import React, { useState } from 'react';
import '../style/components/skills.css';
import SkillCard from './common/SkillCard';
import mySkills from '../data/my-skills';
import DownArrow from './common/DownArrow';

const Skills = () => {
  const [showStackInfo, setShowStackInfo] = useState('')

  return (
    <section className="my-skills-section" id="skills">
      <article data-aos="fade-down" className="my-skills-article">
        <h1>Minhas Habilidades</h1>
        {
          (!showStackInfo)
          ? (
            <>
              <p>
                Estou estudando sobre o mundo do Desenvolvimento Web desde março de 2021, quando conheci a Trybe.
              </p>
              <p>
                Ao lado estou citando algumas tecnologias que já aprendi, caso tenha curiosidade passe o mouse em cima para saber um pouco mais.&#128156;
            </p>
            </>
          )
          : ( mySkills.find(({ stackName }) => stackName === showStackInfo).info )
        }
      </article>
      <article className="my-skills-info">
        {
          mySkills.map(({ imgPath, stackName}) => (
            <SkillCard
              key={ stackName }
              imgPath={ imgPath }
              stackName={ stackName }
              setShowStackInfo={ setShowStackInfo }
              color="purple"
            />
          ))
        }
      </article>
      <DownArrow location="#to-learn" />
    </section>
  );
};

export default Skills;
