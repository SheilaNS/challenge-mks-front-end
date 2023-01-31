import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 1px solid red; */
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-100"]};
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.black};
    -webkit-font-smoothing: antialiassed;
  }

  body, input, textarea, button {
    font: 400 1rem 'Montserrat', sans-serif;
  }
`;
