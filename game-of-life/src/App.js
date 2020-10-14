import React /*, { useState, useEffect }*/ from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';

// Components
import Grid from './components/Grid';
import Buttons from './components/Buttons';
import Rules from './components/Rules';
import About from './components/About';

function App() {
  return (
    <Container fluid="xl">
      <header>
        <h1>Game of Life</h1>
      </header>
      <Row>
        <Col md={8}>
          <Grid />
          <Buttons />
        </Col>
        <Col>
          <Rules />
        </Col>
      </Row>
      <About />
    </Container>
  );
}

export default App;
