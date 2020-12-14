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
      <Main id="page-1" />
      <Services id="page-2" />
      <Jobs id="page-3" />
      <Brands id="page-4" />
      <Contact id="page-5" />
    </Container>
  );
}

export default LandingPage;
