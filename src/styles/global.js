import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      background-color: black;

        textarea:focus, input:focus, select:focus, button:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
        h1{
          margin: 0;
        }
        p{
          margin: 0;
        }
  }

  button{
      cursor: pointer;
  }
`;
