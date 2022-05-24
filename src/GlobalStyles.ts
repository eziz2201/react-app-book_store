import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 
ul {
  list-style-type: none;
}
button {
  font-family: inherit;
  border: 0;
  background: none;
  outline: none;
}
input {
  border: none;
  &:focus {
    outline: none;
  }
}
body {
    
}`;

export default GlobalStyles;
