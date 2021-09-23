import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import Overdrive from 'react-overdrive';

import { HistoryBackButton, SlideCard } from '../micro';
import { streams }  from '../../db';

const ExhibitDetailPage = ({ match }) => {
  const i = streams.find(i => i.slug === match.params.slug);
  const { name, image, slug, streamUrl, description } = i;
  const videoUrl = "https://player.livespotting.com?alias=0ejpnnrt&ch="+streamUrl; 
  return ( 
    <>
      <Container>

        <div className="dark-hero">

          <div style={{ margin: '0px 0 10px 0' }}>
            <HistoryBackButton />
          </div>

          <Row>
            <Col sm="12" md="8">
              <div className="embed-responsive embed-responsive-16by9">
                {/* <iframe
                  title={`Live stream of the ${name} exhibit`}
                  className="embed-responsive-item"
                  src={streamUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
                      <iframe src =  {videoUrl} 
                      title={`Live stream of the ${name} exhibit`}
                      name = "ls-player" 
                      scrolling = "no"
                      className="embed-responsive-item"
                      frameBorder = "0"
                      webkitallowfullscreen = "true"
                      mozallowfullscreen = "true"
                      allowFullScreen   > </iframe>

              </div>
            </Col>
            <Col>

              <Overdrive id={`overdrive-${slug}`}>
                <div
                  style={{
                    margin: 'auto',
                    width: '100%',
                    display: 'block',
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center -100px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '120%',
                    height: 150,
                  }}
                />
              </Overdrive>

              <h2>{name}</h2>

              {description &&
                <p style={{ fontSize: '0.88rem', color: '#c7c7c7' }}>{description}</p>
              }

              <Button color="success" large="true" block>
                Sponsor this Animal
              </Button>

            </Col>
          </Row>
        </div>

      </Container>

      <div className="hwrapper">
        <div className="hwrapper-inner">
          {streams.map((item ,i) => <SlideCard slide={item} key={i} />)}
        </div>
      </div>
    </>

  );
}
export default withRouter(ExhibitDetailPage);
