import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: start;

  .backgroundParagraph {
    color: #191919;
    font-size: 230px;
    position: absolute;
    top: 0;
    height: 712px;
    font-family: 'Trash', sans-serif;
    font-weight: 900;
    z-index: -1;
    line-height: 13rem;
  }

  .imageButton {
    width: 50vw;
    position: relative;
    height: 50vh;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      -webkit-transition: opacity 1s ease-in-out;
      -moz-transition: opacity 1s ease-in-out;
      -o-transition: opacity 1s ease-in-out;
      transition: opacity 1s ease-in-out;
      animation-name: cf4FadeInOut;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 8s;
      &:nth-of-type(1) {
        animation-delay: 6s;
      }
      &:nth-of-type(2) {
        animation-delay: 4s;
      }
      &:nth-of-type(3) {
        animation-delay: 2s;
      }
      &:nth-of-type(4) {
        animation-delay: 0s;
      }
    }
    .wrap {
      position: absolute;
      bottom: 45%;
      left: -40px;
      z-index: 3;

      p {
        color: #f2f2f2;
        font-weight: 200;
        font-size: 14px;
        font-weight: lighter;
        letter-spacing: 3px;
        text-align: right;
        margin-bottom: 20px;
        text-transform: uppercase;
      }

      button {
        padding: 10px 25px;
        border: none;
        background-color: #f2f2f2;
        font-size: 20px;
        font-weight: normal;
        font-family: 'Trash', sans-serif;
        transition: all 0.3s ease-in-out;
        border-radius: 2px;
        color: #1e1e1e;
        &:hover {
          background: linear-gradient(
            90deg,
            rgba(3, 209, 230, 1) 0%,
            rgba(0, 230, 202, 1) 100%
          );
        }
      }
    }
  }

  @keyframes cf4FadeInOut {
    0% {
      opacity: 1;
    }
    17% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    92% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    .backgroundParagraph {
      font-size: 72px;
      text-transform: lowercase;
    }

    .imageButton {
      width: 100%;

      .wrap {
        left: 35%;
        bottom: -91px;

        p {
          display: flex;
          justify-content: center;
        }
        a {
          button {
            color: #1e1e1e;
            font-family: 'Trash';
            background: linear-gradient(
              90deg,
              rgba(3, 209, 230, 1) 0%,
              rgba(0, 230, 202, 1) 100%
            );
          }
        }
      }
    }
  }
`;
