import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavbaR/Nav.jsx';
import Header from './components/HeadeR/Head.jsx';
import Body from './components/BodY/Bod.jsx';
import Footer from './components/FooteR/Foot.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Footer />

    </>
  )
}

export default App;


const Data = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 19.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 29.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 39.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 49.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 59.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 69.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 7,
    "name": "Product 7",
    "price": 79.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 8,
    "name": "Product 8",
    "price": 89.99,
    "image": "https://via.placeholder.com/150"
  }
]