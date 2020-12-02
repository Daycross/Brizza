import styled from 'styled-components';

const design = '70px';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .main {
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;

    .logo {
      width: 144px;
      height: 49px;
      margin-left: 49px;
    }

    .talks {
      position: absolute;
      z-index: -1;
      width: 745px;
      height: 496px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      /* transform: translatex(-50%); */
    }

    .whatWeDo {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        color: white;
        margin-left: 33.4rem;
        height: fit-content;
        font-size: 14px;
        &:last-child {
          font-size: ${design};
        }
      }
      .wrap {
        display: flex;
        width: fit-content;
        height: fit-content;
        flex-direction: column;
      }

      .scroll {
        overflow: auto;
        &::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        height: 300px;
        p {
          margin-left: 5px;
          font-size: ${design};
          height: fit-content;
          &:first-child {
            margin-top: 120px;
          }
          &:last-child {
            margin-bottom: 100px;
          }
        }
      }
    }
  }
`;
