import React from 'react';

import { Container } from './styles';

function LandingPage() {
  return (
    <Container id="page5">
      <p className="backgroundParagraph">
        A matéria prima do design é a cultura
      </p>
      <div className="lema">
        <p>O que é Brizza? É algo tangível? Pode ser descrito ou percebido?</p>
        <p>Brizza, não tem uma forma fixa, não é estavél ou estacionária.</p>
        <p>É algo único e subjetivo.</p>
        <p>Cada pessoa tem a sua, e elas tem sua manifestação própria.</p>
        <p>
          Nós temos mil formas e significados, democraticamente distribuidos
          para todos que buscam algo novo.
        </p>
        <p>E qual é a nossa Brizza?</p>
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
      </div>
    </Container>
  );
}

export default LandingPage;
