import React from "react";
import {Image, Col} from "react-bootstrap";
import withNull from "hoc/withNull";
import NullPicture from "./NullPicture";

function Picture({
                     picture
                 }) {
    return (
        <Col md={4} className="m-2">
            <Image fluid src={picture} alt="Loading"/>
        </Col>
    );
}

const improve = withNull("picture", NullPicture);

export default improve(Picture);