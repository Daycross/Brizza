import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import SocialHeader from '../../socialHeader';
import BrizzaLogo from '../../BrizzaLogo';

// import logoBrizza from '../../../assets/logosImages/brizza2x.png';
import talks from '../../../assets/talks.jpg';

function LandingPage() {
  const [opacityLevel, setOpacityLevel] = useState(0);

  function handleScroll() {
    console.log(window.scrollY);
  }

  useEffect(() => {
    setOpacityLevel(0);
    handleScroll();
  }, []);

  function handleScrollEvent() {
    console.log(window.scrollY);

    if (window.scrollY > 650.0) {
      setOpacityLevel(opacityLevel + 0.1);
    } else if (window.scrollY > 700) {
      setOpacityLevel(opacityLevel + 0.4);
    } else if (window.scrollY > 750) {
      setOpacityLevel(opacityLevel + 0.8);
    } else if (window.scrollY > 850) {
      setOpacityLevel(opacityLevel + 0.8);
    }
  }

  return (
    <Container>
      <SocialHeader />
      <BrizzaLogo />
      <div className="main">
        {/* <img className="logo" src={logoBrizza} alt="Logo Brizza" /> */}
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
