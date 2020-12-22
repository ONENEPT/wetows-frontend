import React from 'react';
import {
  LoginContainer,
  Input,
  PolicyContainer,
  Checkbox,
  PolicyText,
  LoginButton,
  RegisterText,
  GoogleContainer,
  GoogleButton,
} from './SignUpElelments';

const SignUp = () => {
  return (
    <LoginContainer>
      <h2 style={{ marginTop: 10 }}>Register</h2>

      <Input placeholder="Email Address" type="text" />
      <Input placeholder="Store Name" type="text" />
      <Input placeholder="password" type="password" />
      <PolicyContainer>
        <Checkbox type="checkbox" />
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

export default SignUp;
