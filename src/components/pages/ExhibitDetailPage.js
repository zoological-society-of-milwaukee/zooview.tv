import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { HistoryBackButton } from '../micro';
import { streams }  from '../../db';

const ExhibitDetailPage = ({ match }) => {
  const i = streams.find(i => i.slug === match.params.slug);
  return (
    <>
      <Container style={{ padding: '20px 0' }}>
        <HistoryBackButton />
      </Container>

      <Container>
        <div
          style={{
            padding: 15,
            background: 'rgba(32,32,32,0.88)',
            boxShadow: '0 -6px 24px 0 rgba(0,0,0,0.29)',
            borderRadius: 13
          }}
        >

          <Row>
            <Col sm="12" md="8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title={`Live stream of the ${i.name} exhibit`}
                  className="embed-responsive-item"
                  src={i.streamUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col>

              <div
                style={{
                  margin: '10px 0 10px 20px',
                  float: 'right',
                  display: 'inline-block',
                  backgroundImage: `url(${i.image})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '120%',
                  width: 84,
                  height: 84,
                }}
              />

              <h2>{i.name}</h2>

              {i.description &&
                <p style={{ fontSize: '0.88rem', color: '#c7c7c7' }}>{i.description}</p>
              }

            </Col>
          </Row>
        </div>

      </Container>

    </>
  );
}
export default withRouter(ExhibitDetailPage);
