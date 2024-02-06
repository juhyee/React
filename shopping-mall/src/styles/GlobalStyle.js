import React from 'react'
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
    font-family: "Pretendard", sans-serif;
    line-height: 1;
  }
  
  a {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
  }
  
  a:hover {
    text-decoration: none;
  }
  
  a:not([href]) {
    text-decoration: none;
  }
  
  a:not([href]):hover {
    text-decoration: none;
  }
  
  ol,
  ul,
  nav {
    list-style: none;
  }
  
  blockquote,
  q {
    quotes: none;
  }
  
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  input,
  textarea {
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
  }
  
  img {
    width: 100%;
    vertical-align: top;
  }
  
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
    overflow: visible;
    cursor: pointer;
  }
  
  input[type="number"] {
    text-align: center;
    padding: 0;
    border-radius: 0;
    font-size: 16px;
  }
   input[type="number"]::-webkit-outer-spin-button,
   input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  
  /* 웹접근성을 고려한 .blind(hidden) 처리 */
  .blind {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
  }
`;

export default GlobalStyle