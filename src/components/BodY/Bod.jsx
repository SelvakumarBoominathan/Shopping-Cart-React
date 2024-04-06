import React from 'react';
import './Bod.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';


const Bod = ({ Data }) => {
  const [cart, setCart] = useState({});
  const [isInCart, setIsInCart] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = (id) => {
    if (isInCart) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setIsInCart(!isInCart);

    setCart(prevCart => ({
      ...prevCart,
      [id]: !prevCart[id]
    }));
  };




  return (


    <Container className="container-Bod">
      <Row>
        {Data.map((item) => (

          <Card style={{ width: '12rem' }} key={item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.price}
                {/* count = {handleClick} */}
              </Card.Text>
              <Button variant="primary" onClick={() => handleClick(item.id)}>
                {cart[item.id] ? 'Remove' : 'Add to Cart'}
              </Button>
            </Card.Body>
          </Card>

        ))}

      </Row>
    </Container>
  )
}


export default Bod;
