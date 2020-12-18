import React from 'react';
import cardIcon from '../../../images/cardIcon.png';
import cardIcon2 from '../../../images/cardIcon2.png';
import {
  CardContainer,
  CardWrapper,
  Card,
  CardIcon,
  CardH4,
  CardP,
  LinkTo,
} from './CardElements';

const Cards = () => {
  return (
    <CardContainer>
      <CardWrapper>
        <Card>
          <CardIcon src={cardIcon} />

          <CardH4>
            MERCHANT
            <CardP>
              Add all your products to our catalog to get more sales. Get even
              more sales when you add videos and reviews!
            </CardP>
            <LinkTo>Make Sales Now</LinkTo>
          </CardH4>
        </Card>
        <Card>
          <CardIcon src={cardIcon2} />

          <CardH4>
            Reseller
            <CardP>
              RESELLER Create a branded store to sell products from our catalog.
              Share your store link on social media to get sales.
            </CardP>
            <LinkTo>Join Us Now</LinkTo>
          </CardH4>
        </Card>
      </CardWrapper>
    </CardContainer>
  );
};

export default Cards;
