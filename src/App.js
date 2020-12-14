import React from 'react';
import { GlobalStyle } from './styles/global';

import Main from './components/pageCompnents/Main';
import Services from './components/pageCompnents/ServicesP';
import Jobs from './components/pageCompnents/JobsP';
import Brands from './components/pageCompnents/BrandsP';
import Contact from './components/pageCompnents/ContactP';

import SocialHeader from './components/socialHeader';
import BrizzaLogo from './components/BrizzaLogo';
// import { Container } from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <SocialHeader />
      <BrizzaLogo />
      <Main />
      <Services />
      <Jobs />
      <Brands />
      <Contact />
    </>
  );
}

export default App;
