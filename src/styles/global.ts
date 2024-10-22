import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Avenir', sans-serif;
}

 
html, body {
  height: 100%;
}

button {
  cursor: pointer;
  outline: none;
}
 
input { 
  outline: none;
}
`;

export default GlobalStyle;
