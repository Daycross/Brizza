import React from 'react';

import { Link } from 'react-scroll';
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
        <Link
          activeClass="active"
          to="page-2"
          spy="true"
          smooth="true"
          offset={-70}
          duration={500}
        >
          <button type="button" className="step-1">
            <p>Serviços</p>
          </button>
        </Link>

        <div className="line-2" />
        <button type="button" className="step-2">
          <p>Trabalhos</p>
        </button>
        <div className="line-3" />
        <button type="button" className="step-3">
          <p>Marcas</p>
        </button>
        <div className="line-4" />
        <button type="button" className="step-4">
          <p>Contato</p>
        </button>
        <div className="line-5" />
      </div>
    </Container>
  );
}

export default SocialHeader;
