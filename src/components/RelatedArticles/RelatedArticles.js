import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap/esm';
import Records from '../Riad/Riad.json'

const RelatedArticles = () => {
    console.log(Records)
    return (
       <Container>
        <Row>
        <Col >
                    <h3 className='CardHeadline'>RELATED ARTICLES</h3>
                    <Row>
                        {
                            Records.map(({title,picture,des,id})=> {
                                return (


                                    <Card key={id} style={{ width: '16rem', height: '18rem', margin: '10px' }}>
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
        </Row>
       </Container>
    );
};

export default RelatedArticles;