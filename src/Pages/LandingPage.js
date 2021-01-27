import React from 'react';
import { homeObjOne } from '../Data';
import { homeObjTwo } from '../Data';

import Hero from '../components/navbar/heroSection/Hero';
import Services from '../components/navbar/services/Services';
import JoinUs from '../components/navbar/joinUsSection/JoinUs';
import HeroTwo from '../components/navbar/heroSection/HeroTwo';
import Faq from '../components/FAQ/Faq';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <HeroTwo {...homeObjTwo} />
      <Services />
      <JoinUs />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
