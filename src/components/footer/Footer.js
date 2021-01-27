import React from 'react';
import image from '../../images/footerlogo.png';
import youtube from '../../images/YouTube-2.png';
import instagram from '../../images/Instagram-2.png';
import facebook from '../../images/Facebook-2.png';
import {
  Container,
  FooterItems,
  FooterLinkWrapper,
  FooterLogo,
  FooterMenu,
  FooterLink,
  SocialMedia,
  SocialMediaMenu,
  SocialMediaIcon,
} from './FooterElements';

const Footer = () => {
  return (
    <Container>
      <FooterItems>
        <FooterLinkWrapper>
          <FooterLogo src={image} />
          <FooterMenu>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Contact</FooterLink>
            <FooterLink>T & Cs</FooterLink>
            <FooterLink>FAQs</FooterLink>
          </FooterMenu>
        </FooterLinkWrapper>
        <SocialMedia>
          <SocialMediaMenu>Check Us Out On:</SocialMediaMenu>
          <SocialMediaIcon src={youtube} />
          <SocialMediaIcon src={instagram} />
          <SocialMediaIcon src={facebook} />
        </SocialMedia>
      </FooterItems>
    </Container>
  );
};

export default Footer;
