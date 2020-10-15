import React from 'react';

const Grid = (props) => {
    const width = (props.cols * 25)
    // var rowsArr = []

    return (
        <div className="grid" style={{width: width}}>
            {props.grid.map((rows, r) =>
                rows.map((col, c) =>
                    <div
                        className="cell"
                        key={`row-${r}-column-${c}`}
                        // onClick={(e) => props.changeCellColor(r, c)}
                        // style={{
                        //     background: [rows][col] ? 'white' : 'black',
                        // }}
                    >
                    </div>
                )
            )}
        </div>
    );
};

export default Grid;