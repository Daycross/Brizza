import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: start;

  .backgroundParagraph {
    font-family: 'Trash', sans-serif;
    font-weight: bolder;
    color: #191919;
    font-size: 230px;
    position: absolute;
    top: 0;
    height: 712px;
    overflow: hidden;
    z-index: -1;
    text-transform: lowercase;
    line-height: 13rem;
  }

  .lema {
    color: #f2f2f2;
    height: 450px;
    max-width: 25%;
    margin-right: 11.3%;
    p {
      margin-bottom: 2.5rem;
      font-size: 18px;
      letter-spacing: 2px;
      font-family: 'Trash';

      &:nth-child(3) {
        background: -webkit-linear-gradient(
          rgba(3, 209, 230, 1),
          rgba(0, 230, 202, 1)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    height: 450px;
    max-width: 25%;
    width: 294px;
    color: #f2f2f2;
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
        color: #f2f2f2;
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
        margin-bottom: 1rem;
        label {
          position: absolute;
          left: 0%;
          bottom: 0px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid #f2f2f2;
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
        margin-bottom: 1.5rem;
        label {
          position: absolute;
          left: 0%;
          bottom: 0px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid #f2f2f2;
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
          border-bottom: 1px solid #f2f2f2;
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
        color: #f2f2f2;
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
        display: flex;
        justify-content: center;
        padding: 10px 25px;
        border: none;
        background-color: #f2f2f2;
        font-size: 20px;
        font-weight: normal;
        font-family: 'Trash', sans-serif;
        transition: all 200ms ease;
        border-radius: 2px;
        width: 115px;
        margin-bottom: 1rem;
        text-transform: lowercase;
        color: #1e1e1e;
        &:hover {
          background: linear-gradient(
            90deg,
            rgba(3, 209, 230, 1) 0%,
            rgba(0, 230, 202, 1) 100%
          );
          cursor: pointer;
        }
      }
      p {
        font-size: 20px;
      }
      label {
        color: #f2f2f2;
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    .backgroundParagraph {
      font-size: 72px;
      line-height: 13rem;
    }
    .lema {
      height: fit-content;
      max-width: 79%;
      margin-top: 3.375rem;
      margin-right: 0px;
      bottom: 0;
      margin-bottom: 3.375rem;
      p {
        margin-bottom: 1rem;
        font-size: 16px;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      height: 450px;
      max-width: 80%;
      width: 294px;
      color: #f2f2f2;
      margin-top: 4.2rem;

      input:last-child {
        background: linear-gradient(
          90deg,
          rgba(3, 209, 230, 1) 0%,
          rgba(0, 230, 202, 1) 100%
        );
        color: #1e1e1e;
        font-family: 'Trash' !important;
      }
    }
  }
`;
