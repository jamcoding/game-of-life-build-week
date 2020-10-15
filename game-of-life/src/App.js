import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';

// Components
import Grid from './components/Grid';
import Buttons from './components/Buttons';
// import Rules from './components/Rules';
// import About from './components/About';

function App() {
  const rows = 25;
  const cols = 25;

  // States
  const [generation, setGeneration] = useState(0);

  const [grid, setGrid] = useState(() => {
    const grid = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    return grid
  });

  return (
    <Container fluid="xl">
      <header>
        <h1>Game of Life</h1>
      </header>
      <Row>
        <Col md={6} lg={6}>
          <Grid grid={grid} />
          <p className="generation-number">Generations: {generation}</p>
          <Buttons />
        </Col>
        {/* <Col>
          <Rules />
        </Col> */}
      </Row>
      {/* <About /> */}
    </Container>
  );
}

export default App;
