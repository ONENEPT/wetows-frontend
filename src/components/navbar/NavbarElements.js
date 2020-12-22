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
  padding: 0 70px;
  box-shadow: 0 3px 8px -2px rgba(0, 0, 0, 0.2);
  position: fixed;
  background-color: #fdfdfe;
`;

export const NavLogo = styled.img`
  color: var(--color-main);
  justify-self: flex-start;
  cursor: pointer;
  width: 200px;
  display: flex;
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
  height: 80px;
  margin: 0 10px;
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
