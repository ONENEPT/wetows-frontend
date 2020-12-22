import React from 'react';
import { Button } from '../../../ButtonElement';
import { TransparentButton } from '../../../ButtonElement';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './HeroElements';

const InfoSection = ({
  id,
  topLine,
  headline,
  description,
  img,
  imgStart,
  buttonLabel,
  buttonLabel2,
  alt,
  link,
  link2,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                  <Button to={link} style={{ marginRight: '10px' }}>
                    {buttonLabel}
                  </Button>
                  <TransparentButton to={link2}>
                    {buttonLabel2}
                  </TransparentButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
