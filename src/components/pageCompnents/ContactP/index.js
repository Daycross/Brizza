import React from 'react';

import { Container } from './styles';

import instagram from '../../../assets/socialImages/instagramx2.png';
import linkedin from '../../../assets/socialImages/linkedinx2.png';
import be from '../../../assets/socialImages/bex2.png';

function LandingPage() {
  return (
    <Container id="page5">
      <p className="backgroundParagraph">
        A matéria prima do design é a cultura
      </p>
      <div className="lema">
        <p>
          Nascemos do desejo de questionar, criar e<br /> evoluir.
          <br /> Nunca sozinhos. Sempre co-criando.
        </p>
        <p>Vivemos de dar significado e propósito</p>
        <p>
          Trabalhamos sério, mas com muito bom
          <br /> humor.
        </p>
        <p>
          Todo dia buscamos conhecimento,
          <br /> aprendemos novas ferramentas e varamos
          <br />
          noites trampando.
        </p>
        <p>Nossa brizza é realizar.</p>
      </div>
      <div className="form">
        <p>contato</p>
        <form action="submit">
          <div className="name-div">
            <input className="inputStyle" type="text" id="name" required />
            <label htmlFor="name">
              <span className="content-name">Nome</span>
            </label>
          </div>
          <div className="email-div">
            <input className="inputStyle" type="text" id="email" required />
            <label htmlFor="email">
              <span className="content-name">E-mail</span>
            </label>
          </div>
          <div className="textarea-div">
            <textarea id="message" required />
            <label htmlFor="message">
              <span className="content-name">Mensagem</span>
            </label>
          </div>

          <input type="submit" value="Enviar" />
        </form>
        <p>(11)98219-6464</p>
        <div className="social">
          <img src={instagram} alt="Instagram Logo" />
          <img src={linkedin} alt="Linkedin Logo" />
          <img src={be} alt="Be Logo" />
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
