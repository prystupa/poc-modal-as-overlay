import React from 'react';
import {Button} from "react-bootstrap";


type Props = {
    index: number;
    onSave: () => void;
    onCancel: () => void;
}

const TestDialog = ({index, onSave, onCancel}: Props) => {
    return (
        <div>
            <div>You are editing line {index}</div>
            <div>
                <Button variant="secondary" className="m-1" onClick={onCancel}>Cancel</Button>
                <Button variant="primary" className="m-1" onClick={onSave}>Save</Button>
            </div>
        </div>
    );
}

export default TestDialog;
