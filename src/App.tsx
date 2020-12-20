import React from 'react';
import {range} from 'lodash';
import TestOverlay from "./TestOverlay";
import {BsPencilSquare as EditIcon} from "react-icons/bs";
import TestDialog from "./TestDialog";

function App() {
    const items = range(0, 1000);

    return (
        <ul>
            {items.map((index) => (
                <li key={index}>
                    <span>{index}</span>
                    <TestOverlay content={
                        ({close}) => (
                            <TestDialog index={index}
                                        onSave={() => {
                                            console.log(`saved ${index}`);
                                            close();
                                        }}
                                        onCancel={close}/>
                        )
                    }>
                        <EditIcon/>
                    </TestOverlay>
                </li>
            ))}
        </ul>
    );
}

export default App;
