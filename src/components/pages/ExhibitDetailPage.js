import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Button} from 'reactstrap';
import {HistoryBackButton, SlideCard} from '../micro';
import {streams} from '../../db';
import Error404 from './Error404';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ExhibitDetailPage = () => {
    let {slug} = useParams();
    const i = streams.find(j => j.slug === slug);
    const {name, image, streamUrl, description, bg} = i ? i : {};
    const {name2, stream2Url} = i ? i : {};
    let secondVideoButton = '';
    const videoUrl = "https://player.livespotting.com?alias=0ejpnnrt&ch=" + streamUrl;

    if (stream2Url !== undefined) {
        secondVideoButton = <Button href="" onClick={changeVideo} color="primary" block><FontAwesomeIcon icon="video"/> Switch to {name2} Camera</Button>
    }

    function changeVideo() {

        alert('https://player.livespotting.com?alias=0ejpnnrt&ch=' + stream2Url);
    }

    const [serverFix, setserverFix] = useState(0);
    useEffect(() => {
        setserverFix(1)
    }, [])
    return (
        <>
            {serverFix && i ? <div>
                <Container>
                    <div className="dark-hero">
                        <div style={{margin: '0px 0 10px 0'}}>
                            <HistoryBackButton/>
                        </div>
                        <Row>
                            <Col sm="12" md="7" xl="8">
                                <div style={{marginBottom: 20}} id="stream" className="embed-responsive embed-responsive-16by9">
                                    <iframe src={videoUrl}
                                            title={`Live stream of the ${name} exhibit`}
                                            name="ls-player"
                                            scrolling="no"
                                            className="embed-responsive-item"
                                            frameBorder="0"
                                            webkitallowfullscreen="true"
                                            mozallowfullscreen="true"
                                            allowFullScreen></iframe>
                                </div>
                            </Col>
                            <Col>
                                <Row style={{justifyContent: 'center'}}>
                                    <Col xs='8' md={10}>
                                        <div
                                            style={{
                                                margin: '0  auto   10px  auto',
                                                backgroundImage: `url(${image})`,
                                                backgroundPosition: `0px ${bg ? bg : "-30px"}`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                                height: 200,
                                                borderRadius: 30
                                            }}
                                        />
                                    </Col>
                                    <Col xs='12'>
                                        <h2>{name}</h2>
                                        {description &&
                                        <p style={{fontSize: '0.88rem', color: '#c7c7c7'}}>{description}</p>
                                        }
                                    </Col>
                                </Row>
                                {secondVideoButton}

                                <Button style={{marginTop: 10}}
                                        href="https://www.zoosociety.org/support/help-the-society/sponsor-an-animal/"
                                        color="success" target="blank" large="true" block>
                                    Sponsor this Animal
                                </Button>

                            </Col>
                        </Row>
                    </div>

                </Container>
                <div className="hwrapper">
                    <div className="hwrapper-inner">
                        {streams.map((item, i) => <SlideCard slide={item} key={i}/>)}
                    </div>
                </div>
            </div> : serverFix ? <Error404/> : ""}
        </>
    );
}
export default ExhibitDetailPage;
