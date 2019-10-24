import React from "react";
import {Col} from "react-bootstrap";
import ContentEditable from "react-contenteditable";

const NullDescription = ({
                             id,
                             setExistingItemText
                         }) => {
    const onDescriptionChangeEvent = e => {
        //The call to this function will update the item description
        //Since the description prop will no longer be null, the Description will be displayed
        return setExistingItemText(id, e.target.value);
    };

    return (
        <Col
            md={6}
            className="my-2 mx-2 mx-md-auto border border-secondary rounded-lg"
        >
            <ContentEditable
                html="Please enter a description."
                onChange={onDescriptionChangeEvent}
            />

        </Col>
    );
};

export default NullDescription;
