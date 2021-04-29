import React from 'react';

import { Container } from './styles';
import talks from '../../../assets/talks.jpg';

function LandingPage() {
  return (
    <Container id="page3">
      <p className="backgroundParagraph">A matéria prima do design é a cultura</p>
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
        <img src={talks} alt="Apresentação da trabalho da Kopenhagem" />
        <img src={talks} alt="Apresentação da trabalho da Kopenhagem" />
        <img src={talks} alt="Apresentação da trabalho da Kopenhagem" />
        <img src={talks} alt="Apresentação da trabalho da Kopenhagem" />
      </div>
    </Container>
  );
}

export default LandingPage;
