import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Container = styled.div`
  padding: 100px 120px;

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const Title = styled.h3`
  color: var(--color-headerGreen);
  text-decoration: underline;
`;

export const FaqContainer = styled.div`
  padding-top: 50px;
`;

export const Icon = styled.img`
  width: 20px;
`;

export const StyledButton = styled(Button)`
  outline: none;
  &:focus {
    outline: none !important;
  }
`;
