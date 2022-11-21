import React from 'react';
// import Slider from 'infinite-react-carousel';

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

function LandingPage() {
  // function getWindowWidth() {
  //   const width = window.innerWidth;
  //   return width;
  // }
  // const size = getWindowWidth();

  return (
    <Container id="page4">
      <p>marcas que trabalhamos</p>
      {/* <Slider
        className="slideShow"
        style={{ overflow: 'visible' }}
        slidesPerRow={size <= 800 ? 2 : 2}
        duration={4000}
        autoplay
        autoplaySpeed={4000}
        arrows={false}
        dots={false}
        centerPadding={1}
        pauseOnHover={false}
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
      </Slider> */}
      <div className="slider">
        <div className="slider-track">
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
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
