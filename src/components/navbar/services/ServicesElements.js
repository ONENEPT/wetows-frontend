import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  background: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 300px;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    margin-top: 0px;
  }
`;

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // border-radius: 5px;
  max-height: 340px;
  padding: 30px;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--color-headerGreen);
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH4 = styled.h4`
font-size:1rem
margin-bottom:10px;
text-align:center;
color:var(--color-headerGreen);

`;

export const ServicesP = styled.h1`
  font-size: 1rem;
  text-align: left;
`;
