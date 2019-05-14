import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { streams } from '../../db';

const Frontpage = () => {
  return (
    <div>

      <Container>
        <Row>

          {streams.map(i => (
            <Col key={i.id} xs="6" md="auto" className="center">
              <Link to={`/exhibits/${i.slug}`}>
                <div
                  style={{
                    margin: '15px 5px',
                    maxWidth: 220,
                    minWidth: 100,
                    width: '100%',
                    height: 332,
                    backgroundImage: `url(${i.image})`,
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 13,
                    boxShadow: '0 2px 29px 0 rgba(0,0,0,0.32)'

                  }}
                />
              </Link>
            </Col>
          ))}

        </Row>
      </Container>
    </div>
  );
}
export default withRouter(Frontpage);
