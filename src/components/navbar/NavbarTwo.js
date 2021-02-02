import React, { useState } from 'react';
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
  StyledModal,
} from './NavbarElements';
import './navbar.css';
import Login from './login/Login';
import SignUp from '../signUp/SignUp';

import Modal from 'react-bootstrap/Modal';

const NavbarTwo = ({ toggle, isOpen }) => {
  const [lgShow, setLgShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  return (
    <div>
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
              <NavLinks onClick={() => setLgShow(true)}>Log In</NavLinks>
            </NavItem>

            <NavBtn>
              <NavBtnLink onClick={() => setRegisterShow(true)}>
                Earn Now
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainerTwo>
      </NavS>
      <StyledModal
        dialogClassName="my-modal"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Login />
      </StyledModal>
      <StyledModal
        dialogClassName="my-modal"
        size="lg"
        show={registerShow}
        onHide={() => setRegisterShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <SignUp />
      </StyledModal>
    </div>
  );
};

export default NavbarTwo;
