import React from 'react';

import { Container } from './styles';

function LandingPage() {
  function onFocusTest() {
    console.log('Passou Aqui');
  }
  return (
    <Container onMouseOver={onFocusTest}>
      <p className="backgroundParagraph">
        A matéria prima do design é a cultura
      </p>
    </Container>
  );
}

export default LandingPage;
