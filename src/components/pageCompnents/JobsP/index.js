import React from 'react';

import { Container } from './styles';
// import talks from '../../../assets/talks.jpg';

function LandingPage() {
  return (
    <Container id="page3">
      <p className="backgroundParagraph">
        A matéria prima do design é a cultura
      </p>
      <div className="imageButton">
        <div className="wrap">
          <p>
            Nosso
            <br /> Trabalho
          </p>
          <a
            href="https://www.behance.net/estudiobrizza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="buttonBlur"
              type="button"
              href="https://www.behance.net/estudiobrizza"
              target="_blank"
              rel="noopener noreferrer"
            >
              quero ver
            </button>
          </a>
        </div>
        <img
          src="https://www.estudiobrizza.com.br/images/cases/case_01.jpg"
          alt="Cases"
        />
        <img
          src="https://www.estudiobrizza.com.br/images/cases/case_02.jpg"
          alt="Cases"
        />
        <img
          src="https://www.estudiobrizza.com.br/images/cases/case_03.jpg"
          alt="Cases"
        />
      </div>
    </Container>
  );
}

export default LandingPage;
