import {OverlayTrigger, Popover} from "react-bootstrap";
import React, {useCallback, useState} from "react";

type Props = {
    content: ({close}: {close: () => void}) => JSX.Element,
    children: React.ReactElement,
}

const TestOverlay = ({content, children}: Props) => {
    const [show, setShow] = useState(false);
    const onToggle = useCallback((value) => {
        setShow(value);
    }, []);

    const close = useCallback(() => setShow(false), []);
    const Content = content;

    return (
        <OverlayTrigger show={show}
                        onToggle={onToggle}
                        trigger="click"
                        rootClose={true}
                        placement="right"
                        overlay={
                            <Popover id="test-popover-index">
                                <Popover.Content>
                                    <Content close={close} />
                                </Popover.Content>
                            </Popover>
                        }>
            {children}
        </OverlayTrigger>
    );
};

export default TestOverlay;
