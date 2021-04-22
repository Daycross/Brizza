import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  width: fit-content;
  justify-content: center;
  align-items: center;
  margin-left: 49px;

  img {
    width: 144px;
    height: 49px;
    transition: all 300ms ease;
  }

  @media (max-width: 800px) {
    align-items: flex-start;
    margin-left: 25px;
    margin-top: 50px;
  }
`;
