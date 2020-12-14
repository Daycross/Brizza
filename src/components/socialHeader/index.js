import React from 'react';

import { Container } from './styles';
import instagram from '../../assets/socialImages/instagramx2.png';
import linkedin from '../../assets/socialImages/linkedinx2.png';
import be from '../../assets/socialImages/bex2.png';

function SocialHeader() {
  return (
    <Container>
      <div className="social">
        <img src={instagram} alt="Instagram icon" />
        <img src={linkedin} alt="Linkedin icon" />
        <img src={be} alt="Be icon" />
      </div>
      <div className="progressBar">
        <div className="line-1" />
        <div className="step-1">
          <p>Serviços</p>
        </div>
        <div className="line-2" />
        <div className="step-2">
          <p>Trabalhos</p>
        </div>
        <div className="line-3" />
        <div className="step-3">
          <p>Marcas</p>
        </div>
        <div className="line-4" />
        <div className="step-4">
          <p>Contato</p>
        </div>
        <div className="line-5" />
      </div>
    </Container>
  );
}

export default SocialHeader;
