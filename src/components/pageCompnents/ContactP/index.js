import React, { useState } from 'react';

import { Container } from './styles';

function LandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function postForm(ev) {
    ev.preventDefault();
    if (name && email) {
      // eslint-disable-next-line no-undef
      fetch('https://api.apispreadsheets.com/data/FsEfShNm99kmYePJ/', {
        method: 'POST',
        body: JSON.stringify({
          data: { Nome: name, 'E-mail': email, Mensagem: message },
        }),
      }).then((res) => {
        if (res.status === 201) {
          // console.log('enviou');
          setName('');
          setEmail('');
          setMessage('');
          // eslint-disable-next-line no-alert, no-undef
          alert('Contato enviado com sucesso');
        } else {
          // console.log('Erro', res);
        }
      });
    }
  }

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
            <input
              className="inputStyle"
              onChange={(ev) => setName(ev.target.value)}
              value={name}
              type="text"
              id="name"
              required
            />
            <label htmlFor="name">
              <span className="content-name">Nome</span>
            </label>
          </div>
          <div className="email-div">
            <input
              className="inputStyle"
              onChange={(ev) => setEmail(ev.target.value)}
              value={email}
              type="text"
              id="email"
              required
            />
            <label htmlFor="email">
              <span className="content-name">E-mail</span>
            </label>
          </div>
          <div className="textarea-div">
            <textarea
              onChange={(ev) => setMessage(ev.target.value)}
              value={message}
              id="message"
              required
            />
            <label htmlFor="message">
              <span className="content-name">Mensagem</span>
            </label>
          </div>

          <input type="submit" onClick={(ev) => postForm(ev)} value="Enviar" />
        </form>
        <p>(11)98219-6464</p>
      </div>
      <div className="copyright">
        <p>© COPYRIGHT 2022 ESTÚDIO BRIZZA</p>
      </div>
    </Container>
  );
}

export default LandingPage;
