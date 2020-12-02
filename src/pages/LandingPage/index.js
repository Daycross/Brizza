import React from 'react';

import { Container } from './styles';
import Main from '../../components/pageCompnents/Main';
import Services from '../../components/pageCompnents/ServicesP';
import Jobs from '../../components/pageCompnents/JobsP';

function LandingPage() {
  return (
    <Container>
      <Main />
      <Services />
      <Jobs />
    </Container>
  );
}

export default LandingPage;
