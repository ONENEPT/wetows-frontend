import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const CardContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and(max-width:768px) {
    height: 2000px;
    margin-top: 100px;
  }
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardIcon = styled.img`
  height: 70px;
  width: 70px;
  margin: 10px;
`;

export const CardH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--color-headerGreen);
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CardH4 = styled.h4`
font-size:1rem
margin-bottom:10px;
text-align:left;
color:var(--color-headerGreen);

`;

export const CardP = styled.h1`
  font-size: 1rem;
  text-align: left;
`;

export const LinkTo = styled(LinkR)`
  color: var(--color-main);
  font-size: 1rem;

  &:hover {
    color: var(--color-headerGreen);
  }
`;
