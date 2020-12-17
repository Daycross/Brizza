import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import logoBrizza from '../../assets/logosImages/brizza2x.png';
import logoBrizzaBlack from '../../assets/logosImages/brizzaBlack2x.png';

function BrizzaLogo() {
  const [scrollTop, setScrollTop] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  const [makeLogoBlack, setMakeLogoBlack] = useState(false);

  const windowHeight = window.innerHeight;

  function getWindowPosition(scrollPosition) {
    if (scrollPosition <= windowHeight * 0.7) {
      setShowLogo(false);
    } else if (
      scrollPosition > windowHeight * 2.5 &&
      scrollPosition <= windowHeight * 3.5
    ) {
      setMakeLogoBlack(true);
    } else {
      setShowLogo(true);
      setMakeLogoBlack(false);
    }
  }

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      // if (currentPosition > scrollTop) {
      //   // downscroll code
      //   setScrolling(false);
      // } else {
      //   // upscroll code
      //   setScrolling(true);
      // }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    getWindowPosition(scrollTop);
    window.addEventListener('scroll', onScroll);
    return window.addEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Container style={{ display: showLogo ? null : 'none' }} className="teste">
      <img
        src={makeLogoBlack ? logoBrizzaBlack : logoBrizza}
        alt="Logo Brizza"
      />
    </Container>
  );
}

export default BrizzaLogo;
