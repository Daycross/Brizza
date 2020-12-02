import React from 'react';

import { Container } from './styles';
import logoBrizza from '../../assets/logosImages/brizza2x.png';

function BrizzaLogo() {
  return (
    <Container className="teste">
      <img src={logoBrizza} alt="Logo Brizza" />
    </Container>
  );
}

export default BrizzaLogo;
