import styled from 'styled-components';

const title = '30px';

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
    }
    img {
      width: 650px;
      height: 183px;
    }
  }
`;
