import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap/esm';
import Records from '../Riad/Riad.json'
import './Dair.css'

function Dair() {

    return (
        <Container>
            <Row>
                <Col xs={12} md={8} lg={8}>
                    <h3 className='CardHeadline'>নির্বাচিত খবর</h3>
                    <Row>
                        {
                            Records.map(({title,picture,des,id})=> {
                                return (


                                    <Card key={id} style={{ width: '14rem', height: '18rem', margin: '10px' }}>
                                        <Card.Img className='image' variant="top" src={picture}   ></Card.Img>
                                        <a href='https://www.google.com/' target="_blank"><Card.Body>
                                            <Card.Title className='newTitle'>{title}</Card.Title>
                                            <Card.Text className='newsSubTitle'>
                                                {des}
                                            </Card.Text>


                                        </Card.Body>
                                        </a>

                                    </Card>




                                )
                            })
                        }
                    </Row>
                </Col>
                <Col xs={4} md={4} >
                    <h3 className='CardHeadline'>মতামত</h3>
                    {Records.map(({title,des,id})=> {
                                return (
                        <Card style={{ width: '18rem' }}>
                           
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {des}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                                )
                    })
                                }

                </Col>
            </Row>

        </Container>
    )
}

export default Dair;