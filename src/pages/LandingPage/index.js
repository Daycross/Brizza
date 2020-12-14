import React, { useEffect } from 'react';

import { Container } from './styles';
import Main from '../../components/pageCompnents/Main';
import Services from '../../components/pageCompnents/ServicesP';
import Jobs from '../../components/pageCompnents/JobsP';
import Brands from '../../components/pageCompnents/BrandsP';
import Contact from '../../components/pageCompnents/ContactP';

import SocialHeader from '../../components/socialHeader';
import BrizzaLogo from '../../components/BrizzaLogo';

function LandingPage() {
  // const [curHeight, setCurHeight] = useState(0);

  useEffect(() => {
    // setCurHeight(0);
    // getInfo();
    console.log('useEffect');
  }, []);

  // function setScroll() {
  //   setCurHeight(curHeight + 1);
  //   console.log(curHeight);
  // }

  return (
    <Container>
      <SocialHeader />
      <BrizzaLogo />
      <Main />
      <Services />
      <Jobs />
      <Brands />
      <Contact />
    </Container>
  );
}

export default LandingPage;
