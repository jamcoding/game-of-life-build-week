import React from 'react';

const Grid = (props) => {
    return (
        <div className="grid">
            {props.grid.map((rows, r) =>
                rows.map((col, c) =>
                    <div
                        className="cell"
                        key={`row-${r}-column-${c}`}
                        style={{ background: [rows][col] ? 'white' : '#00b863'}}
                    >
                    </div>
                )
            )}
        </div>
    );
};

export default Grid;