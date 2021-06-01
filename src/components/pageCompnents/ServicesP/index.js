/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { Container } from './styles';

import talks from '../../../assets/talks.jpg';

function LandingPage() {
  const [opacityLevel, setOpacityLevel] = useState(0);
  const [readMenu, setReadMenu] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const refWhatWeDo = useRef(null);

  const isMobile: boolean = windowWidth <= 768;

  function alignScroll() {
    const position = document.querySelector('.wrap p:last-child');
    const marginFirstChild = document.querySelector('.scroll p:first-child');
    marginFirstChild.style.marginTop = isMobile
      ? `${position.offsetTop - 3}px`
      : `${position.offsetTop - 8}px`;

    const marginLastChild = document.querySelector('.scroll p:last-child');
    marginLastChild.style.marginBottom = isMobile
      ? `${position.offsetTop - 23}px`
      : `${position.offsetTop - 25}px`;
  }

  window.addEventListener('resize', alignScroll);

  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    alignScroll();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  // function getPosition(element) {
  //   let yPosition = 0;

  //   while (element) {
  //     yPosition += element.offsetTop - element.scrollTop + element.clientTop;
  //     // eslint-disable-next-line no-param-reassign
  //     element = element.offsetParent;
  //   }

  //   return { y: yPosition };
  // }

  const blockScroll = () => {
    document.body.classList.add('has-no-scroll');
  };

  window.addEventListener('scroll', () => {
    const elemento = document.querySelector('#page2').offsetTop;
    if (window.scrollY >= elemento && !readMenu) {
      setReadMenu(1);
      blockScroll();
    }
  });

  // function scrollTeste() {
  //   const elementScroll = document.querySelector('.scroll');
  //   elementScroll.scrollTop = window.scrollY;
  // }

  function scrooled() {
    alignScroll();
    const scroll = document.querySelector('.scroll');
    if (scroll.scrollTop < 1080 && !isMobile) return setOpacityLevel(0);
    if (scroll.scrollTop < 480 && isMobile) return setOpacityLevel(0);

    setOpacityLevel(1);
    setReadMenu(0);
    // return refWhatWeDo?.current?.scrollIntoView(false);
    // scrollTeste();
    return document.body.classList.add('has-scroll');
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
        <div id="trigger" ref={refWhatWeDo} className="whatWeDo">
          <div className="wrap">
            <p>o que fazemos</p>
            <p>design</p>
          </div>
          <div id="page-full-scroll">
            <div id="#scroll" className="scroll" onScroll={scrooled}>
              <div className="gambeta">
                <p>interativo</p>
                <p>UX</p>
                <p>UI</p>
                <p>sites</p>
                <p>aplicativos</p>
                <p>sistemas</p>
                <p>e-commerce</p>
                <p>branding</p>
                <p>social</p>
                <p>talks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
