import styled from 'styled-components';

const title = '1.87rem';

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
      color: white;
      margin-bottom: 51px;
      font-size: ${title};
      font-weight: lighter;
    }
    img {
      display: block;
      max-width: 100%;
      width: 51%;
      height: 183px;
    }
  }
  @media (max-width: 800px) {
    align-items: center;
    .main {
      margin-top: 0px;
      img {
        width: 85%;
      }
    }
  }
`;
