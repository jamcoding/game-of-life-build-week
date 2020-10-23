import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';

// Components
import Grid from './components/Grid';
import Information from './components/Information';

function App() {
  const rows = 25;
  const cols = 25;
  const speed = 150;

  // States
  const [generation, setGeneration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [selectedCells, setSelectedCells] = useState(false);
  const [preset, setPreset] = useState(false);
  const [cellSpeed, setCellSpeed] = useState(speed);
  const intervalRef = useRef(null);

  const [grid, setGrid] = useState(() => {
    const grid = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0))
    return grid
  });

  const randomCells = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Assigning the cell to a number between 1 - 10,
        // if the cell's value equals 1, it's "alive"
        if (Math.floor(Math.random() * 10) === 1) {
          grid[i][j] = true;
        }
      }
    }
    setGrid(grid);
  }

  const gridUpdate = () => {
    let gridUpdate = playingGame(grid);
    setGrid(gridUpdate);
    setGeneration(generation => generation + 1);
  }

  const toggleGame = () => {
    setPlaying(!playing)
  }

  const playingGame = (grid) => {
    const newGame = JSON.parse(JSON.stringify(grid));

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const cell = grid[row][col];
        let neighbors = 0;
        for (let x = -1; x < 2; x++) {
          for (let y = -1; y < 2; y++) {
            if(!(x === 0 && y === 0)) {
              const cellInRow = row + x;
              const cellInColumn = col + y;
              if (cellInRow > 0 && cellInRow < grid.length && cellInColumn > 0 && cellInColumn < grid.length) {
                neighbors += grid[cellInRow][cellInColumn];
              }
            }
          }
        }
        if (cell === 0 && neighbors === 3) {
          newGame[row][col] = 1;
        } else if ((cell === 1 && neighbors > 3) || (cell === 1 && neighbors < 2)) {
          newGame[row][col] = 0;
        }
      }
    }
    return newGame;
  }

  const clearGame = () => {
    const clearGrid = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0))
    setPlaying(false)
    setGrid(clearGrid)
    setGeneration(0)
    setSelectedCells(false)
    setPreset(false)
  };

  const selectOwnCells = (rows, cols) => {
    const newGame = [...grid];
    if(!playing) {
      newGame[rows][cols] = grid[rows][cols] ? 0 : 1;
      setGrid(newGame);
      setSelectedCells(true);
    }
    return newGame;
  }

  //
  // Random Cells Selected with preset(s)
  //
  // Randomizing the cell to a number between 1 - 5,
  // if the cell equals 1, it's "alive"
  const randomOne = () => {
    const randomGridOne = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    for (let i = 0; i < rows; i += 2) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 5) === 1) {
          randomGridOne[i][j] = true;
        }
      }
    }
    setGrid(randomGridOne);
    setPreset(true);
  }

  // Randomizing the cell to a number between 1 - 8,
  // if the cell equals 1, it's "alive"
  const randomTwo = () => {
    const randomGridTwo = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j += 2) {
        if (Math.floor(Math.random() * 8) === 1) {
          randomGridTwo[i][j] = true;
        }
      }
    }
    setGrid(randomGridTwo);
    setPreset(true);
  }

  // Randomizing the cell to a number between 1 - 12,
  // if the cell equals 1, it's "alive"
  const randomThree = () => {
    const randomGridThree = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    for (let i = 0; i < rows; i += 2) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 9) === 1) {
          randomGridThree[i][j] = true;
        }
      }
    }
    setGrid(randomGridThree);
    setPreset(true);
  }

  // Randomizing the cell to a number between 1 - 15,
  // if the cell equals 1, it's "alive"
  const randomFour = () => {
    const randomGridFour = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j += 2) {
        if (Math.floor(Math.random() * 10) === 1) {
          randomGridFour[i][j] = true;
        }
      }
    }
    setGrid(randomGridFour);
    setPreset(true);
  }

  useEffect(() => {
    if (playing && generation === 0) {
      if (selectedCells || preset) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(gridUpdate, cellSpeed);
      } else {
        randomCells();
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(gridUpdate, cellSpeed);
      }
    }
    else if (playing && generation > 0) {
      if (selectedCells || preset) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(gridUpdate, cellSpeed);
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(gridUpdate, cellSpeed);
      }
    } else if (!playing) {
      clearInterval(intervalRef.current);
    }
  }, [playing, generation, cellSpeed]);

  return (
    <Container fluid="md">
      <header>
        <h1>Game of Life</h1>
      </header>
      <Row>
        <Col sm={10} md={10} lg={8} xl={8}>
          <Grid grid={grid} selectOwnCells={selectOwnCells} />
          <p className="generation-number">Generations: {generation}</p>
          <div className="random-preset-buttons">
            <button
              className="random-one"
              onClick={randomOne}
            >
              Preset 1
            </button>
            <button
              className="random-two"
              onClick={randomTwo}
            >
              Preset 2
            </button>
            <button
              className="random-three"
              onClick={randomThree}
            >
              Preset 3
            </button>
            <button
              className="random-four"
              onClick={randomFour}
            >
              Preset 4
            </button>
          </div>
          <div className="buttons">
            <button className="start" onClick={toggleGame}>
              {playing ? 'Pause' : 'Start'}
            </button>
            <button className="clear" onClick={clearGame}>Clear</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10} md={10} lg={8}>
          <Information />
        </Col>
      </Row>
    </Container>
  );
}

export default App;