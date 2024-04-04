import React from 'react';
import "./Nav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const count = 0;

const Navb = (props) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Online Kart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">New Arrival</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Button ClassName="keeper" variant="secondary">
          <img width="64" height="64" src="https://img.icons8.com/nolan/64/shopping-cart.png" alt="shopping-cart" />
          <Badge bg="secondary"><h6>Cart {count}</h6></Badge>
        </Button>
      </Navbar>
    </div >
  )
}

export default Navb;
