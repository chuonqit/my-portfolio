import { createGlobalStyle } from 'styled-components';

const CSSBaseLine = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap');

  :root {
    --purple: #682ae9;
    --purple-hover: rgba(104, 42, 233, .7);
    --light: #dbdbdb;
    --header-link: #dbdbdb;
    --header-link-hover: #682ae9;
    --header-link-hover-icon: #dbdbdb;
    --header-link-active: rgba(85, 85, 85, 1);
    --std-color: #dbdbdb;
    --background: #0e1212;
    --background-rgb: 14, 18, 18;
    --background-light: radial-gradient(var(--background), transparent, var(--purple) 130%);
    --gray: #808080;
    --comment: #555;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  a {
    color: var(--purple);
    text-decoration: none;

    &:hover {
      color: var(--purple-hover);
    }
  }

  button {
    border: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--background);
    text-align: left;
    min-height: 100vh;
  }

  section {
    min-height: 100vh;
  }

  .active {
    color: var(--purple)
  }
`;

export default CSSBaseLine;
