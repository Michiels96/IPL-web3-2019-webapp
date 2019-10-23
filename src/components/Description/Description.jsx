import React from "react";
import {Col} from "react-bootstrap";
import ContentEditable from 'react-contenteditable';
import withNull from "hoc/withNull";
import NullDescription from "./NullDescription";

const Description = ({
                         id,
                         description,
                         setExistingItemText
                     }) => {

    const onDescriptionChangeEvent = (e) => {
        return setExistingItemText(id, e.target.value);
    };

    return <Col
        md={6}
        className="my-2 mx-2 mx-md-auto border border-secondary rounded-lg"
    >
        <ContentEditable
            html={description}
            onChange={onDescriptionChangeEvent}
        />
    </Col>
};

const improve = withNull("description", NullDescription);

export default improve(Description);
 