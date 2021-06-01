/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

import talks from '../../../assets/talks.jpg';

function LandingPage() {
  const [opacityLevel, setOpacityLevel] = useState(0);
  const [readMenu, setReadMenu] = useState(0);
  const refWhatWeDo = useRef(null);

  function alignScroll() {
    const position = document.querySelector('.wrap p:last-child');
    const marginFirstChild = document.querySelector('.scroll p:first-child');
    marginFirstChild.style.marginTop = `${position.offsetTop - 8}px`;

    const marginLastChild = document.querySelector('.scroll p:last-child');
    marginLastChild.style.marginBottom = `${position.offsetTop - 25}px`;
  }

  window.addEventListener('resize', alignScroll);

  useEffect(() => {
    alignScroll();
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
    // refWhatWeDo?.current?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'center',
    //   inline: 'center',
    // });
    document.body.classList.add('has-no-scroll');
  };

  window.addEventListener('scroll', () => {
    const elemento = document.querySelector('#page2').offsetTop;
    // const positions = getPosition(elemento);
    // console.log('scrollY', window.scrollY);
    // console.log('position', positions.y);
    console.log(elemento);
    if (window.scrollY >= elemento && !readMenu) {
      setReadMenu(1);
      blockScroll();
    }
  });

  function scrooled() {
    alignScroll();
    const scroll = document.querySelector('.scroll');
    if (scroll.scrollTop < 1080) return setOpacityLevel(0);

    setOpacityLevel(1);
    setReadMenu(0);
    // return refWhatWeDo?.current?.scrollIntoView(false);
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
        <div ref={refWhatWeDo} className="whatWeDo">
          <div className="wrap">
            <p>o que fazemos</p>
            <p>design</p>
          </div>
          <div className="scroll" onScroll={scrooled}>
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
    </Container>
  );
}

export default LandingPage;
