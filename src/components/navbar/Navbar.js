import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png';

import {
  NavS,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle, loggedIn, name, image }) => {
  return (
    <NavS>
      <NavbarContainer>
        <NavLogo src={Logo} />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Pricing</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="how-it-works">FAQ</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="log-In">Log In</NavLinks>
          </NavItem>

          <NavBtn>
            <NavBtnLink to="sign-up">Earn Now</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavbarContainer>
    </NavS>
  );
};

export default Navbar;
