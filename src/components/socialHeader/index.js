import React, { useState } from 'react';

import { Link } from 'react-scroll';
import { Container } from './styles';

import instagram from '../../assets/socialImages/instagramx2.png';
import linkedin from '../../assets/socialImages/linkedinx2.png';
import be from '../../assets/socialImages/bex2.png';

function SocialHeader() {
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

  function setStyleToDiv(nameStyle) {
    switch (nameStyle) {
      case 'line-1':
        setBorderWidth1(4);
        setBorderWidth2(2);
        setBorderWidth3(2);
        setBorderWidth4(2);
        setBorderWidth5(2);

        setLine1Style('white');
        setLine2Style('white');
        setLine3Style('white');
        setLine4Style('white');
        setLine5Style('white');

        setDiv1Background('white');
        setDiv2Background('transparent');
        setDiv3Background('transparent');
        setDiv4Background('transparent');

        setPColor('white');

        setDivBorderColor('white');
        break;
      case 'line-2':
        setBorderWidth1(4);
        setBorderWidth2(4);
        setBorderWidth3(2);
        setBorderWidth4(2);

        setLine1Style('white');
        setLine2Style('white');
        setLine3Style('white');
        setLine4Style('white');
        setLine5Style('white');

        setDiv1Background('white');
        setDiv2Background('white');
        setDiv3Background('transparent');
        setDiv4Background('transparent');

        setPColor('white');

        setDivBorderColor('white');
        break;
      case 'line-3':
        setBorderWidth1(4);
        setBorderWidth2(4);
        setBorderWidth3(4);
        setBorderWidth4(2);
        setBorderWidth5(2);
        // Trocar pra preto na pagina de marcas
        setLine1Style('black');
        setLine2Style('black');
        setLine3Style('black');
        setLine4Style('black');
        setLine5Style('black');
        setPColor('black');
        setDiv1Background('black');
        setDiv2Background('black');
        setDivBorderColor('black');

        // Outros estilos normais
        setLine3Style('black');

        setDiv3Background('black');
        setDiv4Background('transparent');
        break;
      case 'line-4':
        setBorderWidth1(4);
        setBorderWidth2(4);
        setBorderWidth3(4);
        setBorderWidth4(4);
        setBorderWidth5(4);

        setLine1Style('white');
        setLine2Style('white');
        setLine3Style('white');
        setLine4Style('white');
        setLine5Style('white');

        setDiv1Background('white');
        setDiv2Background('white');
        setDiv3Background('white');
        setDiv4Background('white');

        setPColor('white');

        setDivBorderColor('white');
        break;
      default:
        console.log('nada');
        break;
    }
  }
  return (
    <Container>
      <div className="social">
        <img src={instagram} alt="Instagram icon" />
        <img src={linkedin} alt="Linkedin icon" />
        <img src={be} alt="Be icon" />
      </div>
      <div className="progressBar">
        <div
          style={{ borderColor: line1Style, borderWidth: borderWidth1 }}
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
              backgroundColor: div1Background,
              borderColor: divBorderColor,
            }}
            type="button"
            className="step-1"
          >
            <p style={{ color: pColor }}>Serviços</p>
          </div>
        </Link>
        <div
          className="line-2"
          style={{ borderColor: line2Style, borderWidth: borderWidth2 }}
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
              backgroundColor: div2Background,
              borderColor: divBorderColor,
            }}
            type="button"
            className="step-2"
          >
            <p style={{ color: pColor }}>Trabalhos</p>
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
              backgroundColor: div3Background,
              borderColor: divBorderColor,
            }}
            type="button"
            className="step-3"
          >
            <p style={{ color: pColor }}>Marcas</p>
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
              backgroundColor: div4Background,
              borderColor: divBorderColor,
            }}
            type="button"
            className="step-4"
          >
            <p style={{ color: pColor }}>Contato</p>
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
