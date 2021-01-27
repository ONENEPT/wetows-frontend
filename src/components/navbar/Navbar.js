import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png';
import youtube from '../../images/YouTube.png';
import facebook from '../../images/Facebook.png';
import instagram from '../../images/Instagram.png';

import {
  NavS,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavIcons,
  NavTextContainer,
  NavText,
} from './NavbarElements';

const Navbar = ({ toggle, isOpen }) => {
  return (
    <NavS>
      <NavbarContainer isOpen={isOpen}>
        <NavTextContainer>
          <NavText> Welcome to WeTOWS - Reseller Capital of Africa</NavText>
        </NavTextContainer>
        <NavMenu>
          <NavItem>
            <NavIcons src={youtube} />
          </NavItem>
          <NavItem>
            <NavIcons src={facebook} />
          </NavItem>

          <NavItem>
            <NavIcons src={instagram} />
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </NavS>
  );
};

export default Navbar;
