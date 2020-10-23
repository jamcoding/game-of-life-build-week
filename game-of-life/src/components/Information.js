import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

// Components
import About from './About';
import Rules from './Rules';

function Information() {
    const [key, setKey] = useState('home');

    return (
        <div className="information">
            <Tabs
                id="tabs-layout"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="about" title="About">
                    <About />
                </Tab>
                <Tab eventKey="rules" title="Rules">
                    <Rules />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Information;