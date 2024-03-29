import styled from 'styled-components';

const title = '1.87rem';
const titleMobile = '1.25rem';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 246px;
    height: fit-content;

    p {
      color: #f2f2f2;
      margin-bottom: 51px;
      font-size: ${title};
      font-weight: lighter;
      text-transform: uppercase;
      letter-spacing: 3px;
      z-index: 2;
    }
    img {
      display: block;
      max-width: 100%;
      width: 51%;
      z-index: 2;
    }
  }
  @media only screen and (max-width: 800px) {
    align-items: center;
    .main {
      margin-top: 0px;
      p {
        font-size: ${titleMobile};
      }
      img {
        width: 85%;
      }
    }
  }
`;
