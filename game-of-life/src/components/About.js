import React from 'react';

function About() {
    return (
        <>
            <p>In 1940, John Conway, a British mathematician, invented the cellular automaton called Game of Life. Game of Life is a zero-player game, where the evolution of cells is determined by it's initial state. Along with this evolution of cells, this requires the player to have no further input.</p>
            <p>In theory, the Game of Life has the power of a <a className="active-link" href="https://en.wikipedia.org/wiki/Turing_machine" target="_blank" rel="noopener noreferrer">universal Turing machine</a> meaning, anything that came be computed analytically, can be computed within this game.</p>
            <p>Within the Game of Life, specific <a className="active-link" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns" target="_blank" rel="noopener noreferrer">patterns</a> occur while be ran. There are common pattern types that have been recognized:</p>
            <ul>
                <li><b><i>Still lives</i></b> &rarr; patterns that do not change from one generation to the next</li>
                <li><b><i>Oscillators</i></b> &rarr; patterns that return to their initial state after a certain number of generations</li>
                <li><b><i>Spaceships</i></b> &rarr; patterns that move through out the grid</li>
            </ul>
        </>
    )
}

export default About;