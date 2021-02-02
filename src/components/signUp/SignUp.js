import React from 'react';
import {
  LoginContainer,
  Input,
  LoginButton,
  LoginButtonContainer,
} from './SignUpElelments';

const SignUp = () => {
  return (
    <LoginContainer>
      <h2
        style={{
          marginTop: 10,
          color: '#fff',
          fontSize: '50px',
          textAlign: 'left',
        }}
      >
        Start making money <b style={{ color: 'var(--color-main)' }}>ZERO</b>{' '}
        risks!
      </h2>
      <Input placeholder="Your Name" type="text" />
      <Input placeholder="Email Address" type="email" />
      <Input placeholder="password" type="password" />
      <LoginButtonContainer>
        <LoginButton>Earn Now</LoginButton>
      </LoginButtonContainer>
    </LoginContainer>
  );
};

export default SignUp;
