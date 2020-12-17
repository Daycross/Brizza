import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import talks from '../../../assets/talks.jpg';

function LandingPage() {
  const [opacityLevel, setOpacityLevel] = useState(0);

  useEffect(() => {
    setOpacityLevel(0);
  }, []);

  function handleScrollEvent() {
    if (opacityLevel < 1) {
      setOpacityLevel(opacityLevel + 0.015);
    }
  }

  return (
    <Container id="page2">
      <div className="main">
        <img
          style={{ opacity: opacityLevel }}
          className="talks"
          src={talks}
          alt="Foto com pessoas reunidas numa plaestra"
        />
        <div className="whatWeDo">
          <div className="wrap">
            <p>o que fazemos</p>
            <p>design</p>
          </div>
          <div className="scroll" onScroll={handleScrollEvent}>
            <p>digital</p>
            <p>UX</p>
            <p>UI</p>
            <p>sites</p>
            <p>aplicativos</p>
            <p>sistemas</p>
            <p>e-commerce</p>
            <p>identidade visual</p>
            <p>talks</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
