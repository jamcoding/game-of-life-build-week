import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

function Buttons() {
    return (
        <ButtonGroup>
            <Button variant="secondary" size="sm">Start</Button>
            <Button variant="secondary" size="sm">Stop</Button>
            <Button variant="secondary" size="sm">Pause</Button>
        </ButtonGroup>
    );
};

export default Buttons;