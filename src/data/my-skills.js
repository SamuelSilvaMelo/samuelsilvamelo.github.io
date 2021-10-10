import React from 'react';
import calculateExperienceTime from '../utils/calculateExperienceTime';

const mySkills = [
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/bash/bash-original.svg',
    stackName: 'Bash',
    info:
    <>
      <p>O Bash é a forma como nós programadores nos comunicamos diretamente com o sistema operacional. O Bash é utilizado no Linux e MacOS.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-03-11') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/git/git-plain.svg',
    stackName: 'Git',
    info:
    <>
      <p>O Git é o sistema de versionamento de código mais famoso no meio da programação. Com ele é possível versionar e retormar uma versão antiga do seu código.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-03-16') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/github/github-original.svg',
    stackName: 'GitHub',
    info:
    <>
      <p>O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão. Utiliza o Git é permite que várias pessoas trabalhem em um mesmo projeto.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-03-16') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/html5/html5-original.svg',
    stackName: 'HTML',
    info:
    <>
      <p>O HTML é uma linguagem de marcação (não de programação &#128541;) de código utilizada na construção de páginas Web. É o esqueleto dessa página aqui, por exemplo.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-03-23') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/css3/css3-original.svg',
    stackName: 'CSS',
    info:
    <>
      <p>O CSS é, digamos, a aparência de uma aplicação Web! Consiste em uma linguagem que permite a estilização é possui uma hierarquia de "cascata".</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-03-23') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/javascript/javascript-plain.svg',
    stackName: 'JavaScript',
    info:
    <>
      <p>O JavaScript &#128155; é uma linguagem de programação de alto nível. É possível fazer muita coisa com ela, entre elas dar vida e responsividade à uma aplicação Web.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-03-30') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/jest/jest-plain.svg',
    stackName: 'Jest',
    info:
    <>
      <p>O Jest é uma estrutura de testes de JavaScript. Possui uma estrutura de fácil entendimento e normalmente é utilizado em testes unitários.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-05-20') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/react/react-original.svg',
    stackName: 'React.js',
    info:
    <>
      <p>O React.js &#128153; é uma poderosa biblioteca de desenvolvimento para o Front-End &#128640;.Permite criação de UIs interativas e utiliza componentes, permitindo assim um grande reaproveitamento de código.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-06-18') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://i.imgur.com/wbRSD1i.png',
    stackName: 'RTL',
    info:
    <>
      <p>O React Testing Library (RTL) é um conjunto de utilitários que permite testar componentes React sem depender dos detalhes de implementação. Basicamente é focado em como o usuário utiliza a aplicação.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-06-25') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/redux/redux-original.svg',
    stackName: 'Redux',
    info:
    <>
      <p>O Redux é uma biblioteca para armazenamento de estados (informações) de aplicações JavaScript. É muito usado com o React.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-07-16') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/mysql/mysql-plain-wordmark.svg',
    stackName: 'MySQL',
    info:
    <>
      <p>O MySQL é um sistema de gerenciamento de banco de dados que funciona utilizando a linguagem SQL como interface. É um dos sistemas mais populares com mais de 10 milhões de instalações no mundo.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-09-03') } mêses.
      </p>
    </>
  },
  {
    imgPath: 'https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/mongodb/mongodb-original-wordmark.svg',
    stackName: 'MongoDB',
    info:
    <>
      <p>O MongoDB é um banco de dados NoSQL. Apresenta uma alta performance, escalabilidade e flexibilidade.</p>
      <p>
        <strong>Tempo de Experiência: </strong>
        { calculateExperienceTime('2021-09-22') } mêses.
      </p>
    </>
  }
];

export default mySkills;
