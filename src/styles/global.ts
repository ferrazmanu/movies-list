"use client";

import { createGlobalStyle, keyframes } from "styled-components";

export const glowingFrames = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Figtree", sans-serif;
    background-color: #333; 
    color: #f0f0f0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: "Dancing Script", cursive;
  }

  h1{
    font-size: 140px;
  }

  h2{
    font-size: 90px;
  }

  h3{
    font-size: 60px;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li{
    margin: 0;
  }

  ul, li{
    padding:0;
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #f0f0f0;
  }

  @media only screen and (max-width: 900px) {
    h1{
      font-size: 80px;
    }

    h2{
      font-size: 60px;
    }

    h3{
      font-size: 30px;
    }
  }
`;

export default GlobalStyles;
