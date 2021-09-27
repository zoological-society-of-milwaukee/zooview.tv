import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Overdrive from 'react-overdrive';

import { streams } from '../../db';

const Frontpage = () => {
  return (
    <Container>
      <Row style={{justifyContent:'center'}}> 
        {streams.map(i => (
          <Col key={i.id} xs="12" sm="6"  md="auto" className="center"> 
            <Link to={`/exhibits/${i.slug}`}>
                <div
                  className="frontpage-card"
                  style={{
                    backgroundImage: `url(${i.image})`,
                    backgroundColor: i.themeColor,
                    margin:"10px auto",
                  }}
                >
                  <div style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.4)', positon: 'relative', top: 10, left: 10, fontSize: '0.78rem', color: '#03b830', fontWeight: 'bold' }}>
                    <FontAwesomeIcon icon="circle" style={{ fontSize: '70%', marginRight: 3 }} />
                    {' '}
                    LIVE
                  </div>
                  <h2>{i.name}</h2>
                </div>
              </Link>  
          </Col>
        ))} 
      </Row>
    </Container>
  );
}
export default Frontpage;
