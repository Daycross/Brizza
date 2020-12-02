import React from 'react';

import { Container } from './styles';
import instagram from '../../assets/socialImages/instagramx2.png';
import linkedin from '../../assets/socialImages/linkedinx2.png';
import be from '../../assets/socialImages/bex2.png';

function LandingPage() {
  return (
    <Container>
      <div className="social">
        <img src={instagram} alt="Instagram icon" />
        <img src={linkedin} alt="Linkedin icon" />
        <img src={be} alt="Be  icon" />
      </div>
    </Container>
  );
}

export default LandingPage;
