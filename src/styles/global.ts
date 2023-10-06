import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/github-background.svg";

export default createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --text-title: #8c65bd;
    --status-red: #bc190e;
    --status-green: #1cbc0e;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background) url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 16px Roboto, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;
