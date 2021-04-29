import styled from 'styled-components';

const design = '4.375rem';
const designMobile = '2.1rem';

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
      transition: opacity 0.3s ease;
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
        margin-right: 40px;
        /* box-sizing: border-box;
        align-items: right;
        text-align: right; */

        p {
          color: #f2f2f2;
          @media only screen and (max-width: 1200px) {
            margin-left: 20.4rem;
          }
          height: fit-content;
          font-size: 0.9rem;
          &:last-child {
            font-size: ${design};
            font-weight: bold;
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
        height: 100vh;
        p {
          margin-left: 5px;
          font-size: ${design};
          height: fit-content;
          line-height: 120px;
          color: #f2f2f2;
          /* &:first-child {
            margin-top: 45vh;
          }
          &:last-child {
            margin-bottom: 42.5vh;
          } */
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
          margin-right: 20px;
          p {
            margin-left: 1rem;
            font-size: 0.8rem;
            letter-spacing: 2px;
            &:last-child {
              font-size: ${designMobile};
            }
          }
        }
        .scroll {
          p {
            font-size: ${designMobile};
            line-height: 55px;
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
