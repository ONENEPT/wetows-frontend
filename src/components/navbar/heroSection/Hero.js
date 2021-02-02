import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { Button } from '../../../ButtonElement';
import { TransparentButton } from '../../../ButtonElement';
import SignUp from '../../signUp/SignUp';

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
  const [registerShow, setRegisterShow] = useState(false);
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
                  <Button
                    onClick={() => setRegisterShow(true)}
                    style={{ marginRight: '10px' }}
                  >
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
      <Modal
        dialogClassName="my-modal"
        size="lg"
        show={registerShow}
        onHide={() => setRegisterShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <SignUp />
      </Modal>
    </>
  );
};

export default InfoSection;
