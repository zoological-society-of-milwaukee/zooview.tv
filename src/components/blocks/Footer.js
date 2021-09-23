import React from 'react';
import { Container, Row, Col, Form, Button, FormGroup, Input } from 'reactstrap';

import imgFooterPartners from '../../media/images/footer-sponsors.png';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col sm="12" md="6">
          <h4>LIVE STREAMING HELPS OUR ANIMALS</h4>
          <p>The Zoo’s many snow-loving animals such as the snow leopards, polar bear, Snow Lilly, as well as the caribou and elk herds are most active during the colder temperatures. Feel the crunch of snow beneath your feet and the fresh snow on your cheeks when you visit the Zoo’s North American river otters in their year-round outdoor exhibit, Otter Passage.</p>
        </Col>
        <Col>
          <h4>SEE YOU AT THE ZOO</h4>
          <p>When a break from the chill is what’s in order, step inside the Small Mammals, Aviary, Aquatic & Reptile Center and Stearns Family Apes of Africa buildings to get toasty-warm!</p>
          <Form>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Your Email Address" style={{ display: 'inline-block', background: '#202020', border: '1px solid #353535', maxWidth: 300, marginRight: 10 }} />
              <Button style={{ background: '#d37e1e', border: 'none', color: '#fff' }}>SIGN UP</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>

    <Container style={{  marginTop: 50 }}>
      <Row>
        <Col>

          <p style={{ textAlign: 'center', marginBottom: 20 }}>
            © 2021 Zoological Society of Milwaukee, Zooview.tv. All Rights Reserved.
          </p>

        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
