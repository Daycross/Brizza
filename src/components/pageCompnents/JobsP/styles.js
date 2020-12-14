import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: start;

  .backgroundParagraph {
    color: rgba(118, 118, 118, 0.2);
    font-size: 200px;
    position: absolute;
    top: 0;
    height: 712px;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    z-index: -1;
  }

  .imageButton {
    width: 50%;
    position: relative;
    img {
      width: 100%;
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
    }
    .wrap {
      position: absolute;
      bottom: 45%;
      left: -40px;
      z-index: 3;

      p {
        color: white;
        font-weight: 200;
        font-size: 14px;
        font-weight: lighter;
        letter-spacing: 2px;
        text-align: right;
        margin-bottom: 20px;
        text-transform: uppercase;
      }

      button {
        padding: 10px 25px;
        border: none;
        background-color: white;
        font-size: 20px;
        font-weight: lighter;
        transition: all 200ms ease;
        &:hover {
          background-color: #f0f0f0f0;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .backgroundParagraph {
      font-size: 100px;
    }

    .imageButton {
      width: 100%;

      .wrap {
        left: 35%;
        bottom: -75px;
      }
    }
  }
`;
