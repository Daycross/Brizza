import React, { useState } from 'react';

import { Container } from './styles';
import talks from '../../../assets/talks.jpg';

function LandingPage() {
  const [useBlur, setUseBlur] = useState(false);

  function onFocusTest() {
    console.log('Passou Aqui');
  }
  return (
    <Container onMouseOver={onFocusTest}>
      <p className="backgroundParagraph">
        A matéria prima do design é a cultura
      </p>
      <div className="imageButton">
        <div className="wrap">
          <p>
            Nosso
            <br /> Trabalho
          </p>
          <button type="button" onClick={() => setUseBlur(!useBlur)}>
            quero ver
          </button>
        </div>
        <img
          style={useBlur ? { filter: 'none' } : null}
          src={talks}
          alt="Apresentação da trabalho da Kopenhagem"
        />
      </div>
    </Container>
  );
}

export default LandingPage;
