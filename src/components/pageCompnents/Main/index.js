import React from 'react';

import { Container } from './styles';

import gif from '../../../assets/logosImages/gif.png';

function LandingPage() {
  return (
    <Container id="page1">
      <div className="main">
        <p>Qual é a sua?</p>
        <img src={gif} alt="Gif Brizza" />
      </div>
    </Container>
  );
}

export default LandingPage;
