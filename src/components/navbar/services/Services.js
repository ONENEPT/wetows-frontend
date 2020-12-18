import React from 'react';
import icon1 from '../../../images/icon1.png';
import icon2 from '../../../images/icon2.png';
import icon3 from '../../../images/icon3.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesH4,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>What We Offer</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH4>
            Be a part of the most impactful community in Africa
          </ServicesH4>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH4>Be your own boss. Take control of your shop</ServicesH4>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH4>
            <br />
            Reach your money goals with our tools
          </ServicesH4>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
