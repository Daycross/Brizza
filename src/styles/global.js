import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Trash';
    src: url('../assets/fonts/trash-bold.ttf') format('truetype');
    src: url('../assets/fonts/trash-bold.eot');
    src: url('../assets/fonts/trash-bold.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/trash-bold.woff2') format('woff2'),
        url('../assets/fonts/trash-bold.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    /* font-display: swap; */
}

body{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Oswald', sans-serif;
      background-color: #1e1e1e;
      font-size: 16px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      overflow-x: hidden!important;

      &.has-no-scroll{
        overflow-y: hidden;
      }
      &.has-scroll{
        overflow-y: auto !important;
      }

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

  $color-white: #f2f2f2;
  $color-black: #1e1e1e;
  $gadient-value: linear-gradient(90deg, rgba(3,209,230,1) 0%, rgba(0,230,202,1) 100%);


`;
