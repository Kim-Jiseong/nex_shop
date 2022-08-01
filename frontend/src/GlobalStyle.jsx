import styled, { createGlobalStyle } from "styled-components";

import "aos/dist/aos.css";
const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  a:link { color:white; text-decoration: none;}
 a:visited {color:white; text-decoration: none;}
  html {
    padding: 0;
    margin: 0;
    font-size: 10px;
    @media screen and (max-width: 1300px) {
      font-size: 9px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 8.75px;
    }
    @media screen and (max-width: 750px) {
      font-size: 8.125px;
    }
    @media screen and (max-width: 700px) {
      font-size: 7.5px;
    }
    @media screen and (max-width: 500px) {
      font-size: 6px;
    }
    @media screen and (max-width: 361px) {
      font-size: 5px;
    }
    @media screen and (max-width: 321px) {
      font-size: 4px;
    }
  }

  body { 
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Noto Sans KR', sans-serif;
    color:#252525;
    overflow-x: hidden;
  }
`;

const Body = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  overflow-x: hidden;
`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Body>{children}</Body>
    </>
  );
}

export default GlobalStyle;
