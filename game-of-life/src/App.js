import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';

// Components
import Grid from './components/Grid';

function App() {
  const rows = 25;
  const cols = 25;

  // States
  const [generation, setGeneration] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [grid, setGrid] = useState(() => {
    const grid = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    return grid
  });

  const randomValues = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 15) === 1) {
          grid[i][j] = true;
        }
      }
    }
    setGrid(grid);
  }

  const toggleGame = () => {

  }

  const stopGame = () => {

  };

  useEffect(() => {

  }, []);

  return (
    <Container fluid="xl">
      <header>
        <h1>Game of Life</h1>
      </header>
      <Row>
        <Col md={6} lg={6}>
          <Grid grid={grid} />
          <p className="generation-number">Generations: {generation}</p>
          <div className="buttons">
            <button className="start" onClick={toggleGame}>
              {playing ? 'Pause' : 'Start'}
            </button>
            <button className="clear" onClick={stopGame}>Clear</button>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default App;
