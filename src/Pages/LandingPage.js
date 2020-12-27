import React from 'react';
import { homeObjOne } from '../Data';
import { homeObjTwo } from '../Data';

import Hero from '../components/navbar/heroSection/Hero';
import Services from '../components/navbar/services/Services';
import JoinUs from '../components/navbar/joinUsSection/JoinUs';

const LandingPage = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Services />
      <JoinUs />
    </>
  );
};

export default LandingPage;
