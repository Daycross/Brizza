import React from 'react';

import { Container } from './styles';
import logoBrizzaBlack from '../../assets/logosImages/brizzaBlack2x.png';

function BrizzaLogoBlack() {
  return (
    <Container className="teste">
      <img src={logoBrizzaBlack} alt="Logo Brizza" />
    </Container>
  );
}

export default BrizzaLogoBlack;
