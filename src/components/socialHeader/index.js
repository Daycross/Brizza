/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';
import { Container } from './styles';

import instagram from '../../assets/socialImages/instagramx2.png';
import instagramBlack from '../../assets/socialImages/instagramBlack2x.png';
import linkedin from '../../assets/socialImages/linkedinx2.png';
import linkedinBlack from '../../assets/socialImages/linkedinBlack2x.png';
import be from '../../assets/socialImages/bex2.png';
import beBlack from '../../assets/socialImages/beBlack2x.png';

function SocialHeader() {
  // const [activeStep, setActiveStep] = useState('');

  const [line1Style, setLine1Style] = useState('');
  const [line2Style, setLine2Style] = useState('');
  const [line3Style, setLine3Style] = useState('');
  const [line4Style, setLine4Style] = useState('');
  const [line5Style, setLine5Style] = useState('');

  const [borderWidth1, setBorderWidth1] = useState(2);
  const [borderWidth2, setBorderWidth2] = useState(2);
  const [borderWidth3, setBorderWidth3] = useState(2);
  const [borderWidth4, setBorderWidth4] = useState(2);
  const [borderWidth5, setBorderWidth5] = useState(2);

  const [div1Background, setDiv1Background] = useState('');
  const [div2Background, setDiv2Background] = useState('');
  const [div3Background, setDiv3Background] = useState('');
  const [div4Background, setDiv4Background] = useState('');

  const [pColor, setPColor] = useState('');

  const [divBorderColor, setDivBorderColor] = useState('');
  const [divBorderColor2, setDivBorderColor2] = useState('');
  const [divBorderColor3, setDivBorderColor3] = useState('');
  const [divBorderColor4, setDivBorderColor4] = useState('');

  const [pWeight, setPWeight] = useState('');
  const [pWeight2, setPWeight2] = useState('');
  const [pWeight3, setPWeight3] = useState('');
  const [pWeight4, setPWeight4] = useState('');

  const [pFont, setPFont] = useState('');
  const [pFont2, setPFont2] = useState('');
  const [pFont3, setPFont3] = useState('');
  const [pFont4, setPFont4] = useState('');

  const [leftValue, setLeftValue] = useState();
  const [leftValue2, setLeftValue2] = useState();
  const [leftValue3, setLeftValue3] = useState();
  const [leftValue4, setLeftValue4] = useState();

  const [changeSocialColor, setChangeSocialColor] = useState(false);

  // const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const windowHeight = window.innerHeight;

  function setStyleToDiv(nameStyle) {
    switch (nameStyle) {
      case 'reset':
        setBorderWidth1(2);

        setDiv1Background('transparent');

        setChangeSocialColor(false);

        setPWeight('normal');
        setPWeight2('normal');
        setPWeight3('normal');
        setPWeight4('normal');

        setPFont('');
        setPFont2('');
        setPFont3('');
        setPFont4('');

        setLeftValue(null);
        setLeftValue2(null);
        setLeftValue3(null);
        setLeftValue4(null);
        break;
      case 'line-1':
        setBorderWidth1(4);
        setBorderWidth2(2);
        setBorderWidth3(2);
        setBorderWidth4(2);
        setBorderWidth5(2);

        setLine1Style('#f2f2f2');
        setLine2Style('#f2f2f2');
        setLine3Style('#f2f2f2');
        setLine4Style('#f2f2f2');
        setLine5Style('#f2f2f2');

        setDiv1Background('linear-gradient(to right, #03d1e6, #00e6ca)');
        setDiv2Background('transparent');
        setDiv3Background('transparent');
        setDiv4Background('transparent');

        setPColor('#f2f2f2');

        setDivBorderColor('#03d1e6');
        setDivBorderColor2('#f2f2f2');
        setDivBorderColor3('#f2f2f2');
        setDivBorderColor4('#f2f2f2');

        setChangeSocialColor(false);

        setPWeight('bold');
        setPWeight2('normal');
        setPWeight3('normal');
        setPWeight4('normal');

        setPFont('Trash');
        setPFont2('');
        setPFont3('');
        setPFont4('');

        setLeftValue(-88);
        setLeftValue2(null);
        setLeftValue3(null);
        setLeftValue4(null);
        break;
      case 'line-2':
        setBorderWidth1(4);
        setBorderWidth2(4);
        setBorderWidth3(2);
        setBorderWidth4(2);

        setLine1Style('#f2f2f2');
        setLine2Style('#f2f2f2');
        setLine3Style('#f2f2f2');
        setLine4Style('#f2f2f2');
        setLine5Style('#f2f2f2');

        setDiv1Background('transparent');
        setDiv2Background('linear-gradient(to right, #03d1e6, #00e6ca)');
        setDiv3Background('transparent');
        setDiv4Background('transparent');

        setPColor('#f2f2f2');

        setDivBorderColor('#f2f2f2');
        setDivBorderColor2('#03d1e6');
        setDivBorderColor3('#f2f2f2');
        setDivBorderColor4('#f2f2f2');

        setChangeSocialColor(false);

        setPWeight('normal');
        setPWeight2('bold');
        setPWeight3('normal');
        setPWeight4('normal');

        setPFont('');
        setPFont2('Trash');
        setPFont3('');
        setPFont4('');

        setLeftValue(null);
        setLeftValue2(-95);
        setLeftValue3(null);
        setLeftValue4(null);
        break;
      case 'line-3':
        setBorderWidth1(4);
        setBorderWidth2(4);
        setBorderWidth3(4);
        setBorderWidth4(2);
        setBorderWidth5(2);
        // Trocar pra preto na pagina de marcas
        setLine1Style('#1e1e1e');
        setLine2Style('#1e1e1e');
        setLine3Style('#1e1e1e');
        setLine4Style('#1e1e1e');
        setLine5Style('#1e1e1e');

        setPColor('#1e1e1e');

        setDiv1Background('transparent');
        setDiv2Background('transparent');
        setDiv3Background('linear-gradient(to right, #03d1e6, #00e6ca)');
        setDiv4Background('transparent');

        setDivBorderColor('#1e1e1e');
        setDivBorderColor2('#1e1e1e');
        setDivBorderColor3('#03d1e6');
        setDivBorderColor4('#1e1e1e');

        // Outros estilos normais
        setLine3Style('#1e1e1e');

        setChangeSocialColor(true);

        setPWeight('normal');
        setPWeight2('normal');
        setPWeight3('bold');
        setPWeight4('normal');

        setPFont('');
        setPFont2('');
        setPFont3('Trash');
        setPFont4('');

        setLeftValue(null);
        setLeftValue2(null);
        setLeftValue3(-80);
        setLeftValue4(null);
        break;
      case 'line-4':
        setBorderWidth1(4);
        setBorderWidth2(4);
        setBorderWidth3(4);
        setBorderWidth4(4);
        setBorderWidth5(4);

        setLine1Style('#f2f2f2');
        setLine2Style('#f2f2f2');
        setLine3Style('#f2f2f2');
        setLine4Style('#f2f2f2');
        setLine5Style('#f2f2f2');

        setDiv1Background('transparent');
        setDiv2Background('transparent');
        setDiv3Background('transparent');
        setDiv4Background('linear-gradient(to right, #03d1e6, #00e6ca)');

        setPColor('#f2f2f2');

        setDivBorderColor('#f2f2f2');
        setDivBorderColor2('#f2f2f2');
        setDivBorderColor3('#f2f2f2');
        setDivBorderColor4('#03d1e6');

        setChangeSocialColor(false);

        setPWeight('normal');
        setPWeight2('normal');
        setPWeight3('normal');
        setPWeight4('bold');

        setPFont('');
        setPFont2('');
        setPFont3('');
        setPFont4('Trash');

        setLeftValue(null);
        setLeftValue2(null);
        setLeftValue3(null);
        setLeftValue4(-80);
        break;
      default:
        console.log('Sapucaia');
        break;
    }
  }

  function getWindowPosition(scrollPosition) {
    if (scrollPosition <= windowHeight * 0.5) {
      setStyleToDiv('reset');
    } else if (
      scrollPosition > windowHeight * 0.5 &&
      scrollPosition <= windowHeight * 1.5
    ) {
      setStyleToDiv('line-1');
    } else if (
      scrollPosition > windowHeight * 1.5 &&
      scrollPosition <= windowHeight * 2.5
    ) {
      setStyleToDiv('line-2');
    } else if (
      scrollPosition > windowHeight * 2.5 &&
      scrollPosition <= windowHeight * 3.5
    ) {
      setStyleToDiv('line-3');
    } else {
      setStyleToDiv('line-4');
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

  function menuBurguer() {
    document.querySelector('.burguer').classList.toggle('active');
    document.querySelector('.progressBar').classList.toggle('open');
  }

  return (
    <Container>
      <button type="button" onClick={menuBurguer} className="burguer">
        <div className="burguer-1" />
        <div className="burguer-2" />
        <div className="burguer-3" />
      </button>

      <div className="social">
        <a
          href="https://www.instagram.com/estudiobrizza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={changeSocialColor ? instagramBlack : instagram}
            alt="Instagram icon"
          />
        </a>

        <a
          href="https://br.linkedin.com/company/estudiobrizza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={changeSocialColor ? linkedinBlack : linkedin}
            alt="Linkedin icon"
          />
        </a>

        <a
          href="https://www.behance.net/estudiobrizza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={changeSocialColor ? beBlack : be} alt="Be icon" />
        </a>
      </div>
      <div className="progressBar">
        <div
          style={{
            borderColor: line1Style,
            borderWidth: borderWidth1,
          }}
          className="line-1"
        />
        <Link
          onClick={() => setStyleToDiv('line-1')}
          activeClass="active"
          to="page2"
          spy
          smooth
          offset={0}
          duration={500}
        >
          <div
            style={{
              background: div1Background,
              borderColor: divBorderColor,
            }}
            type="button"
            className="step-1"
          >
            <p
              style={{
                color: pColor,
                fontWeight: pWeight,
                fontFamily: pFont,
                left: leftValue,
              }}
            >
              Serviços
            </p>
          </div>
        </Link>
        <div
          className="line-2"
          style={{
            borderColor: line2Style,
            borderWidth: borderWidth2,
          }}
        />
        <Link
          onClick={() => setStyleToDiv('line-2')}
          activeClass="active"
          to="page3"
          spy
          smooth
          offset={0}
          duration={500}
        >
          <div
            style={{
              background: div2Background,
              borderColor: divBorderColor2,
            }}
            type="button"
            className="step-2"
          >
            <p
              style={{
                color: pColor,
                fontWeight: pWeight2,
                fontFamily: pFont2,
                left: leftValue2,
              }}
            >
              Trabalhos
            </p>
          </div>
        </Link>

        <div
          className="line-3"
          style={{ borderColor: line3Style, borderWidth: borderWidth3 }}
        />
        <Link
          onClick={() => setStyleToDiv('line-3')}
          activeClass="active"
          to="page4"
          spy
          smooth
          offset={0}
          duration={500}
        >
          <div
            style={{
              background: div3Background,
              borderColor: divBorderColor3,
            }}
            type="button"
            className="step-3"
          >
            <p
              style={{
                color: pColor,
                fontWeight: pWeight3,
                fontFamily: pFont3,
                left: leftValue3,
              }}
            >
              Marcas
            </p>
          </div>
        </Link>

        <div
          className="line-4"
          style={{ borderColor: line4Style, borderWidth: borderWidth4 }}
        />
        <Link
          onClick={() => setStyleToDiv('line-4')}
          activeClass="active"
          to="page5"
          spy
          smooth
          offset={0}
          duration={500}
        >
          <div
            style={{
              background: div4Background,
              borderColor: divBorderColor4,
            }}
            type="button"
            className="step-4"
          >
            <p
              style={{
                color: pColor,
                fontWeight: pWeight4,
                fontFamily: pFont4,
                left: leftValue4,
              }}
            >
              Contato
            </p>
          </div>
        </Link>

        <div
          className="line-5"
          style={{ borderColor: line5Style, borderWidth: borderWidth5 }}
        />
      </div>
    </Container>
  );
}

export default SocialHeader;
