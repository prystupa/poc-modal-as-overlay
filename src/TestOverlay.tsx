import {OverlayTrigger, Popover} from "react-bootstrap";
import TestDialog from "./TestDialog";
import {BsPencilSquare as EditIcon} from "react-icons/bs";
import React, {useCallback, useState} from "react";

type Props = {
    index: number;
    onSave: () => void;
}

const TestOverlay = ({index, onSave}: Props) => {
    const [show, setShow] = useState(false);
    const onToggle = useCallback((value) => {
        setShow(value);
    }, []);

    const onDialogSave = useCallback(() => {
        onSave();
        setShow(false);
    }, [onSave]);
    const onCancel = useCallback(() => setShow(false), []);

    return (
        <OverlayTrigger show={show}
                        onToggle={onToggle}
                        trigger="click"
                        rootClose={true}
                        placement="right"
                        overlay={
                            <Popover id="test-popover-index">
                                <Popover.Content>
                                    <TestDialog index={index} onCancel={onCancel} onSave={onDialogSave}/>
                                </Popover.Content>
                            </Popover>
                        }>
            <EditIcon/>
        </OverlayTrigger>
    );
};

export default TestOverlay;
