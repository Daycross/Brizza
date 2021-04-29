import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-snap-align: start;
  background-color: #f2f2f2;
  /* overflow: visible;
  overflow-x: hidden; */

  p {
    display: flex;
    font-size: 14px;
    font-weight: lighter;
    letter-spacing: 3px;
    text-transform: uppercase;
    transform: translateY(120px);
  }

  @keyframes scroll {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(calc(-380px * 9));
    }
  }

  .slider {
    display: flex;
    width: 100%;
    background: #f2f2f2;
    height: 250px;
    overflow: hidden;
    position: relative;
    transform: translateY(150px);
    &-track {
      animation: scroll 40s linear infinite;
      display: flex;
      width: calc(300px * 9);
      .slide {
        display: flex;
        align-items: center;
        margin-right: 5rem;
        width: fit-content;
        img {
          height: auto;
          width: 300px;
        }
      }
    }
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
        color: #f2f2f2;
      }
    }
  }
`;
