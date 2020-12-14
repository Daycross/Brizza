import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';

import { Container } from './styles';

import Avon from '../../../assets/logosImages/avon.png';
import BrasilCt from '../../../assets/logosImages/brasilct.png';
import Goldratt from '../../../assets/logosImages/goldratt.png';
import Hcentrix from '../../../assets/logosImages/hcentrix.png';
import Kopenhagen from '../../../assets/logosImages/kopenhagen.png';
import LaPercussi from '../../../assets/logosImages/laPercussi.png';
import Luandre from '../../../assets/logosImages/luandre.png';
import MachadoMeyer from '../../../assets/logosImages/machadoMeyer.png';
import Modeat from '../../../assets/logosImages/modear.png';

import BrizzaLogoBlack from '../../BrizzaLogoBlack';

function LandingPage() {
  const [changeLogo, setChangeLogo] = useState(false);

  function getWindowWidth() {
    const width = window.innerWidth;
    return width;
  }
  const size = getWindowWidth();

  function onFocusThis() {
    setChangeLogo(true);
    console.log('in');
  }

  function onFocusThisOut() {
    setChangeLogo(false);
    console.log('in');
  }

  return (
    <Container onMouseOver={onFocusThis} onMouseOut={onFocusThisOut}>
      {changeLogo ? <BrizzaLogoBlack /> : null}
      <p>marcas que trabalhamos</p>
      <Slider
        className="slideShow"
        style={{ overflow: 'visible' }}
        slidesPerRow={size <= 800 ? 2 : 3}
        duration={500}
        autoplay
        autoplaySpeed={5000}
        adaptiveHeight
        arrows={false}
        dots
      >
        <div className="slide">
          <img src={Avon} alt="Logo da Avon" />
        </div>
        <div className="slide">
          <img src={Luandre} alt="Logo da Luandre" />
        </div>
        <div className="slide">
          <img src={Kopenhagen} alt="Logo da Kopenhagen" />
        </div>
        <div className="slide">
          <img src={LaPercussi} alt="Logo da LaPercussi" />
        </div>
        <div className="slide">
          <img src={BrasilCt} alt="Logo da BrasilCt" />
        </div>
        <div className="slide">
          <img src={Goldratt} alt="Logo da Goldratt" />
        </div>
        <div className="slide">
          <img src={Hcentrix} alt="Logo da Hcentrix" />
        </div>
        <div className="slide">
          <img
            className="machadoImg"
            src={MachadoMeyer}
            alt="Logo da Machado Meyer"
          />
        </div>
        <div className="slide">
          <img src={Modeat} alt="Logo da Modeat" />
        </div>
      </Slider>
    </Container>
  );
}

export default LandingPage;
