import React from 'react';

const Grid = (props) => {
    return (
        <div className="grid">
            {props.grid.map((rows, r) =>
                rows.map((cols, c) =>
                    <div
                        className="cell"
                        key={`row-${r}-column-${c}`}
                        onClick={(e) => props.selectOwnCells(r, c)}
                        style={{ background: [rows][cols] ? 'white' : '#00b863'}}
                    >
                    </div>
                )
            )}
        </div>
    );
};

export default Grid;