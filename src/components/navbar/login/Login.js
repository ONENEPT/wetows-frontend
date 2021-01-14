import React from 'react';
import image from '../../../images/man.png';
import {
  LoginContainer,
  ImageWrapper,
  Image,
  Input,
  PolicyContainer,
  Checkbox,
  PolicyText,
  LoginButton,
  RegisterText,
  GoogleContainer,
  GoogleButton,
} from './LoginElements';

const Login = () => {
  return (
    <LoginContainer>
      <h2 style={{ marginTop: 10 }}>Login</h2>
      <ImageWrapper>
        <Image src={image} alt="login" />
      </ImageWrapper>
      <Input placeholder="Email Address" type="text" />
      <Input placeholder="password" type="password" />
      <PolicyContainer>
        <Checkbox style={{ marginRight: 10 }} type="checkbox" />
        <PolicyText>
          I Accept The <span style={{ color: '#5CE1E6' }}>Terms of Use</span> &{' '}
          <span style={{ color: '#5CE1E6' }}>Privacy Policy</span>
        </PolicyText>
      </PolicyContainer>
      <LoginButton>SIGN UP</LoginButton>
      <PolicyContainer>
        <PolicyText>Don't have an account yet?</PolicyText>
        <RegisterText to="sign-up">Register</RegisterText>
      </PolicyContainer>
      <GoogleContainer>
        <GoogleButton>Login With Google</GoogleButton>
      </GoogleContainer>
    </LoginContainer>
  );
};

export default Login;
