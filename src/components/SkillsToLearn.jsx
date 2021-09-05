import React, { useState } from 'react';
import '../style/components/skillsToLearn.css'
import SkillCard from './common/SkillCard';
import skillsToLearn from '../data/skills-to-learn';
import DownArrow from './common/DownArrow';

const SkillsToLearn = () => {
  const [showStackInfo, setShowStackInfo] = useState('')

  return (
    <section className="skills-to-learn-section" id="to-learn">
      <article className="skills-to-learn-article">
        <h1>Vou aprender isso em breve!</h1>
        {
          (!showStackInfo)
          ? (
            <>
              <p>
                Minha jornada está apenas começando e tenho muita curiosidade em aprender coisas novas! Essa constante mudança no mercado da tecnologia é fascinante.
              </p>
              <p>
                Já aprendi muito até aqui, porém ainda existem várias tecnologias e habilidades que pretendo desenvolver.
              </p>
              <p>
                Ao lado estou citando algumas, caso tenha curiosidade passe o mouse em cima para saber um pouco mais. 
              </p>
            </>
          )
          : ( skillsToLearn.find(({ stackName }) => stackName === showStackInfo).info )
        }
      </article>
      <article className="skills-to-learn-info">
        {
          skillsToLearn.map(({ imgPath, stackName}) => (
            <SkillCard
              key={ stackName }
              imgPath={ imgPath }
              stackName={ stackName }
              setShowStackInfo={ setShowStackInfo }
              color="dark"
            />
          ))
        }
      </article>
      <DownArrow />
    </section>
  );
};

export default SkillsToLearn;
