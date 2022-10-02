import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap/esm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Riad.css';



function Riad(props) {
  const {title,des,picture} =props.Datas;
  return (
    <Fragment>
      <Container>


        <Row>
          <Col xs={12} md={8} >
            <h3 className='CardHeadline'>নির্বাচিত খবর</h3>
            <Row>
                <Col>
                  <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                       {des}
                      </Card.Text>
                      <Button variant="primary">বিস্তারিত</Button>
                    </Card.Body>
                  </Card>

                </Col>
             


            </Row>

          </Col>


          <Col xs={6} md={4}>
            <h3 className='CardHeadline'>মতামত</h3>
            {Array.from({ length: 1 }).map((_, idx) => (
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            ))}


          </Col>


        </Row>





      </Container>

    </Fragment>
  )
}

export default Riad;