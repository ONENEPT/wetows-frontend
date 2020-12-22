import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  width: 500px;
  background: #fff;
  margin: 0 auto;
  border: 0.5px solid var(--color-headerGreen);
  border-radius: 14px;
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
export const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 54px;
`;
export const Image = styled.img`
  width: 70px;
  height: 70px;
  text-align: center;
`;

export const Input = styled.input`
  width: 80%;
  height: 50px;
  align-item: center;
  border-radius: 14px;
  background: #e5e5e5;
  border: none;
  text-indent: 10px;
  margin-top: 15px;
`;

export const PolicyContainer = styled.div``;

export const Checkbox = styled.input`
  border: 1px solid #e5e5e5;
  display: inline-block;
`;

export const PolicyText = styled.p`
  display: inline-block;
  color: #000;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

export const LoginButton = styled.button`
  width: 80%;
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

export const RegisterText = styled(Link)`
  color: var(--color-main);
`;

export const GoogleContainer = styled.div`
  width: 500px;
  height: 50px;
  background: #f9f9f9;
  text-align: center;
  margin: 10px auto;

  @media screen and (max-width: 500px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

export const GoogleButton = styled.button`
  width: 80%;
  height: 50px;
  background: #f9f9f9;
  text-align: center;
  margin: 0 auto;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;
