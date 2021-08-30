import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --highlight: #2499ff;
    --background: #101114;
    --white: #eeeeee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--white);
  }

  a,a:visited {
    text-decoration: none;
    color: var(--highlight);
  }

  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }
`;

export default GlobalStyle;
