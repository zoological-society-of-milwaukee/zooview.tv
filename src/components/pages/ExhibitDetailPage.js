import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap'; 
import { HistoryBackButton, SlideCard } from '../micro';
import { streams }  from '../../db'; 
 
const ExhibitDetailPage = () => {
  let {slug} = useParams();
  const i = streams.find(j => j.slug === slug); 
  const { name, image, streamUrl, description, bg } = i;

  const videoUrl = "https://player.livespotting.com?alias=0ejpnnrt&ch="+streamUrl; 
const [serverFix, setserverFix] = useState(0);
console.log(serverFix);
useEffect(() => { 
  setserverFix(1)  
}, [ ])
  return ( 
    <>
   {serverFix? <div>
 <Container> 
        <div className="dark-hero"> 
          <div style={{ margin: '0px 0 10px 0' }}>
            <HistoryBackButton />
          </div> 
         <Row>
            <Col sm="12" md="7" xl="8">
              <div style={{marginBottom:20}} className="embed-responsive embed-responsive-16by9"> 
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
                <div
                  style={{
                    margin:'0  auto   10px  auto',
                    width: '70%',
                    display: 'block',
                    backgroundImage: `url(${image})`,
                    backgroundPosition:`0px ${bg?bg:"-30px"}`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '  cover',
                    height: 200,
                    borderRadius:30
                  }}
                />  
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
    </div>:""  }  
     

    </>

  );
}
export default ExhibitDetailPage;
