import React from 'react';

import {
  LoginContainer,
  Input,
  LoginButton,
  LoginButtonContainer,
} from './LoginElements';

const Login = () => {
  return (
    <LoginContainer>
      <h2 style={{ marginTop: 10, color: '#fff', fontSize: '63px' }}>
        Login to <b style={{ color: 'var(--color-main)' }}> WeTows</b>
      </h2>

      <Input placeholder="Email Address" type="text" />
      <Input placeholder="password" type="password" />
      <LoginButtonContainer>
        <LoginButton>Login</LoginButton>
      </LoginButtonContainer>
    </LoginContainer>
  );
};

export default Login;
