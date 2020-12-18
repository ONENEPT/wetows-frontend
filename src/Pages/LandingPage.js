import React, { useState } from 'react';
import { homeObjOne } from '../Data';
import { homeObjTwo } from '../Data';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/navbar/sidebar/Sidebar';
import Hero from '../components/navbar/heroSection/Hero';
import Services from '../components/navbar/services/Services';
import JoinUs from '../components/navbar/joinUsSection/JoinUs';
import Cards from '../components/navbar/cards/Cards';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Services />
      <JoinUs />
      <Cards />
    </>
  );
};

export default LandingPage;
