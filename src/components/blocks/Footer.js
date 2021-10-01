import React from 'react';
import { Container, Row, Col, Form, Button, FormGroup, Input } from 'reactstrap';

// import imgFooterPartners from '../../media/images/footer-sponsors.png';

const Footer = () => {
    const year = new Date().getFullYear();
  
return(
  <footer>
    <Container>
      <Row>
        <Col sm="12" md="6">
          <h4>WELCOME THE WILD INTO YOUR HOME</h4>
          <p>Lions, tigers, penguins and more! Observing Zoo animals builds appreciation, curiosity and empathy for the natural world and the creatures that inhabit it. With these live streams, you can check in with your favorite Milwaukee County Zoo residents from the comfort of your home.</p>
        </Col>
        <Col>
          <h4>SEE YOU AT THE ZOO</h4>
          <p>The Milwaukee County Zoo’s 190-acre complex is home to more than 2,200 animals. The Zoo is one of Milwaukee’s oldest environmental establishments and provides countless opportunities for education, outdoor activity and family fun. </p>
 
        </Col>
      </Row>
    </Container>

    <Container style={{  marginTop: 50 }}>
      <Row>
        <Col> 
          <p style={{ textAlign: 'center', marginBottom: 20 }}>
            © {year} Zoological Society of Milwaukee, Zooview.tv. All Rights Reserved.
          </p> 
        </Col>
      </Row>
    </Container>
  </footer>
)}

export default Footer
