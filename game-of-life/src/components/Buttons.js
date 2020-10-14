import React from 'react';
import { ButtonGroup, Button, Row, Col } from 'react-bootstrap';

function Buttons() {
    return (
        <Row>
            <Col>
                <ButtonGroup>
                    <Button variant="secondary" size="sm">Start</Button>
                    <Button variant="secondary" size="sm">Stop</Button>
                    <Button variant="secondary" size="sm">Pause</Button>
                </ButtonGroup>
            </Col>
        </Row>
    );
};

export default Buttons;