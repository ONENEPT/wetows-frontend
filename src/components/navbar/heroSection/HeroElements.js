import styled from 'styled-components';

export const InfoContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
display:grid;
z-index:1;
height:600px;
width:100%;
margin-right:auto;
margin-left:auto;
justify-content:center;


}
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-left: 10%;

  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;

  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    max-width: 700px;
  }
`;

export const TopLine = styled.p`
  color: var(--color-main);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  border-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: var(--color-headerGreen);

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-headerGreen);
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: 800px;
  }
`;

export const ImgWrapTwo = styled.div`
  height: 100%;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    max-width: 800px;
  }
`;

export const Img = styled.img`
  margin: 0 0 10px 0;
  width: 100%;
  padding-right: 0;
`;

export const LinkText = styled.p`
  color: var(--color-main);
  cursor: pointer;

  &:hover {
    font-size: 18px;
    transition: 0.3s;
  }
`;
