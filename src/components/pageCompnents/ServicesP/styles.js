import styled from 'styled-components';

const design = '4.375rem';
const designMobile = '2.5rem';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
  z-index: 1;

  .main {
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;

    img {
      position: absolute;
      z-index: -1;
      max-width: 60%;
      width: 745px;
      height: auto;
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
      justify-content: center;
      width: 99vw;

      .wrap {
        display: flex;
        width: fit-content;
        height: fit-content;
        flex-direction: column;

        p {
          color: white;
          @media only screen and (max-width: 1200px) {
            margin-left: 20.4rem;
          }
          height: fit-content;
          font-size: 0.9rem;
          &:last-child {
            font-size: ${design};
          }
          &:first-child {
            letter-spacing: 3px;
          }
        }
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
          line-height: 80px;
          color: white;
          &:first-child {
            margin-top: 122px;
          }
          &:last-child {
            margin-bottom: 99px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .main {
      img {
        position: absolute;
        z-index: -1;
        max-width: 100%;
        width: 100%;
        height: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: none;
      }

      .whatWeDo {
        width: 100vw;
        .wrap {
          p {
            margin-left: 1rem;
            font-size: 1rem;
            &:last-child {
              font-size: ${designMobile};
            }
          }
        }
        .scroll {
          p {
            font-size: ${designMobile};
            line-height: 47px;
            &:first-child {
              margin-top: 140px;
            }
            &:last-child {
              margin-bottom: 115px;
            }
          }
        }
      }
    }
  }
`;
