import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;700&family=Raleway:wght@900&display=swap');
   body{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Oswald', sans-serif;
      background-color: black;
      font-size: 16px;

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
          display: flex;
        }
  }

  button{
      cursor: pointer;
  }
`;
