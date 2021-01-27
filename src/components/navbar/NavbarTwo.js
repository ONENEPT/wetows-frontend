import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png';

import {
  NavS,
  NavbarContainerTwo,
  NavStart,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from './NavbarElements';

const NavbarTwo = ({ toggle, isOpen }) => {
  return (
    <NavS>
      <NavbarContainerTwo isOpen={isOpen}>
        <NavStart>
          <NavItem>
            <FaBars />
          </NavItem>
          <NavItem>FAQ</NavItem>
        </NavStart>

        <NavLogo src={Logo} />

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/log-In">Log In</NavLinks>
          </NavItem>

          <NavBtn>
            <NavBtnLink to="/sign-up">Earn Now</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavbarContainerTwo>
    </NavS>
  );
};

export default NavbarTwo;
