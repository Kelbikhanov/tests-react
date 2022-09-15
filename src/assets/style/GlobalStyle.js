import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --max-width: 1372px;
    --max-width-tight: 995px;
    --horizontal-padding: 16px;

    --black: #000;
    --brand-yellow: #FCB500;
    --inter-font: 'Rubik', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: var(--inter-font);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.7;
    color: #000;
    -webkit-font-smoothing: antialiased;

    @media(min-width: 769px) {
      font-size: 16px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }

  button {
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
    box-shadow: none;
  }

  img {
    display: block;
  }

  p {
    padding: 0;
    margin: 0;
    margin-top: 0;
  }

  a {
    text-decoration: none;
  }

  #root {
    overflow: visible;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
  }

  .container {
    width: 100%;
    max-width: 995px;
    margin: 0 auto;
    padding: 0 16px;

    &--large {
      max-width: 1440px;
    }
  }

  .link {
    display: inline-block;
    font-weight: 600;
    color: inherit;
    border-bottom: 1px dotted #000;
    transition: border-bottom-color, 0.2s;

    @media(min-width: 1200px) {
      &:hover, &:active {
        border-bottom-color: rgba(0, 0, 0, 0);
      }
    }
  }
`;

export default GlobalStyle;
