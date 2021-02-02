import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  width: 500px;
  background: #453f3f;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  height: 500px;

  @media screen and (max-width: 500px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 50px;
  align-item: center;
  border-radius: 14px;
  background: #e5e5e5;
  border: none;
  text-indent: 10px;
  margin-top: 15px;
`;

export const LoginButton = styled.button`
  width: 300px;
  color: #fff;
  background: var(--color-main);
  height: 50px;
  border: none;
  border-radius: 14px;
  margin-top: 70px;

  &:hover {
    color: var(--color-main);
    border: 2px solid var(--color-main);
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
`;

export const LoginButtonContainer = styled.div`
  text-align: right;
  margin-right: 30px;
`;

export const RegisterText = styled(Link)`
  color: var(--color-main);
`;
