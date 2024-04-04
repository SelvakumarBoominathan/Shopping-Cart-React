import React from 'react';
import './Foot.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Foot = () => {
  return (
    <Container fluid>
      <Row className="row-footer">
      Copyright © Your Website 2024
        {/* <Col className="row-footer"></Col> */}
      </Row>
    </Container>
  )
}

export default Foot
