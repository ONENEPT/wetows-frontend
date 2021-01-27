import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavS = styled.nav`
  background-color: #fdfdfe;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 70px 0 30%;

  background-color: #fdfdfe;
  text-align: center;
`;

export const NavbarContainerTwo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding-top: 50px;
  z-index: 10;
  width: 100%;
  padding: 0 70px;

  background-color: #fdfdfe;
  text-align: center;
`;

export const NavLogo = styled.img`
  color: var(--color-main);
  justify-self: center;
  cursor: pointer;
  width: 150px;

  display: flex;
`;

export const NavStart = styled.div`
  color: var(--color-main);
  justify-self: flex-start;
  display: flex;
  text-align: center;
  margin-bottom: 0;
  align-items: center;
`;

export const NavIcons = styled.img`
  color: var(--color-main);
  justify-self: flex-start;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-main);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 10px;
  list-style-type: none;
  color: var(--color-headerGreen);
  font-weight: 700;
`;

export const NavLinks = styled(Link)`
  color: var(--color-headerGreen);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;

  &.active: {
    color: var(--color-headerGreen);
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-headerGreen);
    text-decoration: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.h4`
  color: black;
`;
export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: var(--color-main);
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid var(--color-main);
    color: var(--color-main);
  }
`;

export const NavTextContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const NavText = styled.p`
  justify-self: center;
  height: 20px;\
  font-weight:500;
  font-size:21px;
  line-height:25px;
  align:center;
`;
