import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  height: 100vh;
  width: 120px;
  justify-content: flex-end;
  z-index: 999;

  .burguer {
    display: none;
  }

  .social {
    position: absolute;
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 50px 0 52px 0;
    z-index: 4;
    img {
      height: 20px;
      width: 20px;
    }
  }

  .progressBar {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;

    /* & > .active {
      & > div {
        background-color: #f2f2f2;
      }
    } */
    p {
      transition: all 0.2s ease;
    }
    .line-1 {
      width: 1px;
      border-left: 2px solid #f2f2f2;
      height: 25%;
      transform: translateX(77px) translateY(1.5px) rotate(8deg);
      transition: all 300ms ease;
    }

    .step-1 {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #f2f2f2;
      transform: translateX(58px);
      background-color: transparent;
      cursor: pointer;
      transition: all 300ms ease;

      p {
        position: absolute;
        color: #f2f2f2;
        left: -59px;
        top: -10px;
        transition: all 300ms ease;
      }
    }

    .line-2 {
      width: 1px;
      border-left: 2px solid #f2f2f2;
      height: 15%;
      transform: translateX(70px) rotate(-5deg);
      transition: all 300ms ease;
    }

    .step-2 {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #f2f2f2;
      transform: translateX(68px);
      background-color: transparent;
      cursor: pointer;
      transition: all 300ms ease;

      p {
        position: absolute;
        color: #f2f2f2;
        left: -66px;
        top: -10px;
        transition: all 300ms ease;
      }
    }

    .line-3 {
      width: 1px;
      border-left: 2px solid #f2f2f2;
      height: 15%;
      transform: translateX(68px) rotate(5deg);
      transition: all 300ms ease;
    }

    .step-3 {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #f2f2f2;
      transform: translateX(58px);
      background-color: transparent;
      cursor: pointer;
      transition: all 300ms ease;

      p {
        position: absolute;
        color: #f2f2f2;
        left: -52px;
        top: -10px;
        transition: all 300ms ease;
      }
    }

    .line-4 {
      width: 1px;
      border-left: 2px solid #f2f2f2;
      height: 15%;
      transform: translateX(68px) rotate(-5deg);
      transition: all 300ms ease;
    }

    .step-4 {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #f2f2f2;
      transform: translateX(68px);
      background-color: transparent;
      cursor: pointer;
      transition: all 300ms ease;

      p {
        position: absolute;
        color: #f2f2f2;
        left: -54px;
        top: -10px;
        transition: all 300ms ease;
      }
    }

    .line-5 {
      width: 1px;
      border-left: 2px solid #f2f2f2;
      height: 15%;
      transform: translateX(98px) translateY(-6px) rotate(-27deg);
      transition: all 300ms ease;
    }
  }

  @media only screen and (max-width: 800px) {
    margin: 0 20px 0 0;
    width: fit-content;
    .burguer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 30px;
      width: 30px;
      background: transparent;
      border: none;
      position: fixed;
      left: 5px;
      z-index: 100;
      top: 5px;
      &-1,
      &-2,
      &-3 {
        width: 100%;
        height: 2px;
        background-color: #f2f2f2;
        transition: all 0.2s ease;
      }
    }
    .active {
      .burguer-1 {
        transform: translateY(9px) rotate(45deg);
      }
      .burguer-2 {
        transform: translateX(200px);
      }
      .burguer-3 {
        transform: translateY(-9px) rotate(-45deg);
      }
    }

    .social {
      flex-direction: column;
      width: fit-content;
      img {
        margin-bottom: 10px;
      }
    }

    .progressBar {
      width: 104px;
      position: initial;
      transform: translateX(300px);
    }

    .open {
      transform: translateX(0px);
    }
  }

  /* @media only screen and (min-height: 800px) {
    .progressBar {
      .line-1 {
        transform: translateX(77px) translateY(1.5px) rotate(7deg);
      }
      .line-2 {
        transform: translateX(68px) rotate(-5deg);
      }
      .line-5 {
        transform: translateX(98px) translateY(-7px) rotate(-23deg);
      }
    }
  } */
`;
