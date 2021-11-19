import React from 'react';
import {
  typeScriptLogo,
  dockerLogo,
  pythonLogo,
  cSharpLogo,
  dotNetLogo,
} from '../img'

const skillsToLearn = [
  {
    imgPath: typeScriptLogo,
    stackName: 'TypeScript',
    info:
    <>
      <p>O TypeScript é um superconjunto sintático de JavaScript que adiciona tipagem estática à linguagem.</p>
    </>
  },
  {
    imgPath: dockerLogo,
    stackName: 'Docker',
    info:
    <>
      <p>O Docker é um produto que utiliza a virtualização de um sistema operacional para execução de softwares em pacotes padronizados chamados <i>contêineres</i>.</p>
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
      <p>É um Framework criado pela Microsoft. Totalmente orientado à objetos, muito utilizado no desenvolvimento Web, mas pode ser utilizado em outros sistemas.</p>
    </>
  },
];

export default skillsToLearn;
