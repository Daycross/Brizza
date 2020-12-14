import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: start;

  .backgroundParagraph {
    font-family: 'Raleway', sans-serif;
    font-weight: bolder;
    color: rgba(118, 118, 118, 0.2);
    font-size: 200px;
    position: absolute;
    top: 0;
    height: 712px;
    overflow: hidden;
    z-index: -1;
  }

  .lema {
    color: white;
    height: 450px;
    max-width: 25%;
    margin-right: 11.3%;
    p {
      margin-bottom: 2.5rem;
      font-size: 18px;
      letter-spacing: 2px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    height: 450px;
    max-width: 25%;
    width: 294px;
    color: white;
    p {
      margin-bottom: 22px;
      letter-spacing: 2px;
      &:first-child {
        margin-bottom: 15px;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .inputStyle {
        border: none;
        background-color: transparent;
        color: white;
        width: 100%;
        outline: none;
        padding: 20px 0 5px 0;
        &:focus + label .content-name,
        &:valid + label .content-name {
          transform: translateY(-100%);
          font-size: 12px;
          color: rgb(118, 118, 118);
        }
      }

      .inputStyle:focus + label::after,
      .inputStyle:valid + label::after {
        transform: translateX(0%);
      }

      .name-div {
        position: relative;
        label {
          position: absolute;
          left: 0%;
          bottom: 0px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid white;
          &::after {
            content: '';
            position: absolute;
            left: 0px;
            bottom: -1px;
            height: 100%;
            width: 100%;
            border-bottom: 3px solid rgb(118, 118, 118);
            transform: translateX(-100%);
            transition: all 0.3s ease;
          }
        }
      }

      .email-div {
        position: relative;
        margin-bottom: 20px;
        label {
          position: absolute;
          left: 0%;
          bottom: 0px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid white;
          &::after {
            content: '';
            position: absolute;
            left: 0px;
            bottom: -1px;
            height: 100%;
            width: 100%;
            border-bottom: 3px solid rgb(118, 118, 118);
            transform: translateX(-100%);
            transition: all 0.3s ease;
          }
        }
      }

      .textarea-div {
        position: relative;
        margin-bottom: 45px;
        label {
          position: absolute;
          left: 0%;
          bottom: 0px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid white;
          &::after {
            content: '';
            position: absolute;
            left: 0px;
            bottom: -1px;
            height: 100%;
            width: 100%;
            border-bottom: 3px solid rgb(118, 118, 118);
            transform: translateX(-100%);
            transition: all 0.3s ease;
          }
        }
      }

      .content-name {
        position: absolute;
        bottom: 5px;
        left: 0px;
        transition: all 0.3s ease;
      }

      textarea {
        border: none;
        background-color: transparent;
        color: white;
        resize: none;
        height: 96px;
        width: 100%;

        &:focus + label .content-name,
        &:valid + label .content-name {
          transform: translateY(-450%);
          font-size: 12px;
          color: rgb(118, 118, 118);
          margin-bottom: 20px;
        }
      }
      input:last-child {
        width: 132px;
        height: 50px;
        font-size: 20px;
        background-color: white;
        margin-bottom: 33px;
        cursor: pointer;
        transition: all 200ms ease;
        &:hover {
          background-color: #f0f0f0f0;
        }
      }
      p {
        font-size: 20px;
      }
      label {
        color: white;
        font-size: 14px;
      }
    }

    .social {
      display: flex;
      justify-content: space-between;
      width: 95px;
      img {
        height: 20px;
        width: 20px;
      }
    }
  }

  @media (max-width: 800px) {
    align-items: flex-start;
    height: 150vh;
    .backgroundParagraph {
      font-size: 100px;
    }
    .lema {
      height: fit-content;
      max-width: 79%;
      margin-top: 5%;
      margin-right: 0px;
      position: absolute;
      bottom: 0;
      p {
        margin-bottom: 1rem;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      height: 450px;
      max-width: 80%;
      width: 294px;
      color: white;
      margin-top: 4.2rem;
    }
  }
`;
