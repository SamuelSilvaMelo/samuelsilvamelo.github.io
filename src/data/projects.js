import {
  triviaReactRedux,
  trybeWallet,
  searchGitHubUsers,
  searchZipCode,
} from '../img';

const projects = [
  {
    title: 'Jogo Trivia',
    img: triviaReactRedux,
    link: 'https://samuelsilvamelo.github.io/trivia-react-redux/',
    repo: 'https://github.com/SamuelSilvaMelo/trivia-react-redux',
  },
  {
    title: 'Trybe Wallet',
    img: trybeWallet,
    link: 'https://samuelsilvamelo.github.io/trybewallet/',
    repo: 'https://github.com/SamuelSilvaMelo/trybewallet',
  },
  {
    title: 'Usuários GitHub',
    img: searchGitHubUsers,
    link: 'https://samuelsilvamelo.github.io/search-github-users/',
    repo: 'https://github.com/SamuelSilvaMelo/search-github-users',
  },
  {
    title: 'Encontre seu CEP',
    img: searchZipCode,
    link: 'https://samuelsilvamelo.github.io/zip-code-search/',
    repo: 'https://github.com/SamuelSilvaMelo/zip-code-search',
  }
];

export default projects;
