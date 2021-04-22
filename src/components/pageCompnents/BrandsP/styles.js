import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  scroll-snap-align: start;
  background-color: white;
  /* overflow: visible;
  overflow-x: hidden; */

  p {
    display: flex;
    width: 60%;
    align-self: flex-end;
    font-size: 14;
    font-weight: lighter;
    letter-spacing: 3px;
    text-transform: uppercase;
    transform: translateY(-140px);
  }

  .slideShow {
    height: 300px;
    margin-top: 40px;
    transform: translateY(-140px);
  }
  .slide {
    width: fit-content;
    height: fit-content;
    img {
      width: 320px;
      height: auto;
    }
    p {
      color: white;
    }
  }

  .machadoImg {
    width: 320px;
    height: 200px;
  }

  @media only screen and (max-width: 800px) {
    .slide {
      width: fit-content;
      height: fit-content;
      img {
        width: 110px;
        height: auto;
      }
      p {
        color: white;
      }
    }
  }
`;
