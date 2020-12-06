import React from 'react';

import { Container } from './styles';
import Main from '../../components/pageCompnents/Main';
import Services from '../../components/pageCompnents/ServicesP';
import Jobs from '../../components/pageCompnents/JobsP';
import Brands from '../../components/pageCompnents/BrandsP';
import Contact from '../../components/pageCompnents/ContactP';

import SocialHeader from '../../components/socialHeader';
import BrizzaLogo from '../../components/BrizzaLogo';

function LandingPage() {
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
