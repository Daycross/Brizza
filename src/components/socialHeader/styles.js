import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  height: 100vh;
  width: 120px;
  margin-right: 1em;
  justify-content: flex-end;

  .social {
    position: absolute;
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 17px 0 52px 0;
    img {
      height: 20px;
      width: 20px;
    }
  }
`;
