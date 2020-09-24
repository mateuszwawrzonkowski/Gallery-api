import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding: 0;
    }

    html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
    }

    body {
    font-size: 1.6rem;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(140deg, rgba(120,161,187,1) 0%, rgba(244,223,231,1) 100%);
    }
`;

export default GlobalStyle;
