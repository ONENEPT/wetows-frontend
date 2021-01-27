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
  LinkText,
  ImgWrapTwo,
  Img,
} from './HeroElements';

const HeroTwo = ({
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
                <LinkText>Pick from our best selling products</LinkText>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapTwo>
                <Img src={img} alt={alt} />
              </ImgWrapTwo>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default HeroTwo;
