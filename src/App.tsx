import React from 'react';
import {range} from 'lodash';
import TestOverlay from "./TestOverlay";

function App() {
    const items = range(0, 1000);

    return (
        <ul>
            {items.map((index) => (
                <li key={index}>
                    <span>{index}</span>
                    <TestOverlay index={index} onSave={() => console.log(`saved ${index}`)}/>
                </li>
            ))}
        </ul>
    );
}

export default App;
