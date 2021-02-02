import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

import {
  Container,
  Title,
  FaqContainer,
  Icon,
  StyledButton,
} from './FaqElements';
import image from '../../images/circle.svg';

const Faq = () => {
  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <FaqContainer>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Icon src={image} />
              <Accordion.Toggle
                as={StyledButton}
                variant="link"
                eventKey="0"
                style={{ color: '#256559' }}
              >
                What is WeTOWS?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  WeTOWS is an online reseller platform where anyone can start a
                  business without investment. Open your own branded online
                  store selling products from our suppliers
                </p>
                <p>Here’s what you get on WETOWS:</p>

                <p>
                  1. Thousands of products at good prices, which you can sell
                  and make money
                </p>
                <p>2. An online store of your own</p>
                <p>3. Payment gateway</p>
                <p>
                  4. Access to sales tools to take your money-making skills to
                  the next level
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Icon src={image} />
              <Accordion.Toggle
                as={StyledButton}
                variant="link"
                eventKey="1"
                style={{ color: '#256559' }}
              >
                How do I make money on WETOWS?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  As a supplier, you make money when any of the products you
                  listed gets sold. If the product is from your business you get
                  paid the full price but for other businesses you get paid a
                  percent of the price.
                </p>
                <p>
                  As a reseller, you make money when a customer buys from your
                  store. You get the markup you added to the original price of
                  the product after transaction fees are deducted.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Icon src={image} />
              <Accordion.Toggle
                as={StyledButton}
                variant="link"
                eventKey="2"
                style={{ color: '#256559' }}
              >
                Who is a supplier?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>
                  If you own or know businesses that can supply a product,
                  physical or digital, you are a supplier
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Icon src={image} />
              <Accordion.Toggle
                as={StyledButton}
                variant="link"
                eventKey="3"
                style={{ color: '#256559' }}
              >
                Who is a reseller?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  If you don't own or know any buisness that can supply a
                  product, pysical or digital, but you want to sell, you are a
                  reseller
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Icon src={image} />
              <Accordion.Toggle
                as={StyledButton}
                variant="link"
                eventKey="4"
                style={{ color: '#256559' }}
              >
                How is WETOWS different from any other distribution business?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                  WETOWS doesn't hold inventory, we provide tools that help
                  suppliers and resellers make sales and make money.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Icon src={image} />
              <Accordion.Toggle
                as={StyledButton}
                variant="link"
                eventKey="5"
                style={{ color: '#256559' }}
              >
                How much does WETOWS cost?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p>
                  WETOWS is free for 90 days. Reseller stores cost N2156 per
                  month after trial period. WETOWS also charges a 7% transaction
                  fee on final selling price
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Icon src={image} />
              <Accordion.Toggle
                as={StyledButton}
                variant="link"
                eventKey="6"
                style={{ color: '#256559' }}
              >
                How do I get paid and when?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <p>
                  Resellers can request up to seven monthly withdrawals per
                  account. Suppliers get paid at the end of each working day
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </FaqContainer>
    </Container>
  );
};

export default Faq;
