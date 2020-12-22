import React from 'react';
import { homeObjOne } from '../Data';
import { homeObjTwo } from '../Data';

import Hero from '../components/navbar/heroSection/Hero';
import Services from '../components/navbar/services/Services';
import JoinUs from '../components/navbar/joinUsSection/JoinUs';
import Cards from '../components/navbar/cards/Cards';

const LandingPage = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Services />
      <JoinUs />
      <Cards />
    </>
  );
};

export default LandingPage;
