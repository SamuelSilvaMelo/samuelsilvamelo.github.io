import React from 'react';
import {
  nodeLogo,
  pythonLogo,
  cSharpLogo,
  dotNetLogo,
} from '../img'

const skillsToLearn = [
  {
    imgPath: nodeLogo,
    stackName: 'NodeJS',
    info:
    <>
      <p>O NodeJS é um interpretador de JavaScript que permite a sua interpretação fora do navegador Web. Aqui vou aprender sua utilização no Back-End.</p>
    </>
  },
  {
    imgPath: pythonLogo,
    stackName: 'Python',
    info:
    <>
      <p>O Python é uma linguagem de programação de alto nível (possuí uma linguagem mais "humana"), tem uma sintaxe simples e orientação à objetos.</p>
    </>
  },
  {
    imgPath: cSharpLogo,
    stackName: 'C#',
    info:
    <>
      <p>O C# é uma linguagem muito famosa, desenvolvida pela Microsoft. É uma linguagem de alto nível, orientada a objetos de forte tipagem.</p>
    </>
  },
  {
    imgPath: dotNetLogo,
    stackName: '.NET',
    info:
    <>
      <p>É um Framework criado pela Microsoft. Totalmente orientado à objetos, muito utilizado no desenvolvimento Web mas pode ser utilizado em outros sistemas.</p>
    </>
  },
];

export default skillsToLearn;
