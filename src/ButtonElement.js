import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link } from 'react-router-dom';

export const ButtonScroll = styled(LinkS)`
  border-radius: 5px;
  background: #6a63fb;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid var(-color--headerGreen);
    color: #6a63fb;
  }
`;

export const Button = styled(Link)`
  border-radius: 5px;
  background: var(--color-headerGreen);
  width: ${({ notWide }) => (notWide ? '120px' : '')};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid var(--color-headerGreen);
    color: var(--color-headerGreen);
    text-decoration: none;
  }
`;

export const TransparentButton = styled(Link)`
  border-radius: 5px;
  background: transparent;
  width: ${({ notWide }) => (notWide ? '120px' : '')};
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--color-headerGreen);
  font-size: 13px;
  outline: none;
  border: 2px solid var(--color-headerGreen);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--color-headerGreen);
    color: #fff;
    text-decoration: none;
  }
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  background: ${({ red }) => (red ? 'red' : '#6a63fb')};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: ${({ red }) => (red ? '2px solid red' : '2px solid #6a63fb')};
    color: ${({ red }) => (red ? 'red' : '#6a63fb')};
  }
`;
