import React from 'react';
import './Bod.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Bod = () => {
  return (

    <Container className="container-Bod">
      <Row>
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Fancy Product</Card.Title>
            <Card.Text>
              $50.00 $25.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Fancy Product</Card.Title>
            <Card.Text>
              $120.00 - $280.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Special Item</Card.Title>
            <Card.Text>
              $100.00 - $220.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Special Item</Card.Title>
            <Card.Text>
              $18.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
      </Row>
      <Row>
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Special Item</Card.Title>
            <Card.Text>
              $40.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Sale Item</Card.Title>
            <Card.Text>
              $130.00 - $220.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Sale Item</Card.Title>
            <Card.Text>
              $100.00 - $220.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
        {/* <Col> */}
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Popular Item</Card.Title>
            <Card.Text>
              $190.00 - $220.00
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* </Col> */}
      </Row>
    </Container>
  )
}

export default Bod;



