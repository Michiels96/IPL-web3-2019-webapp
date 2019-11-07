import React from "react";
import {Nav} from "react-bootstrap";

const NavLinkItem = (props) => (
    <Nav.Item>
        <Nav.Link {...props}>
            { props.children }
        </Nav.Link>
    </Nav.Item>
);

export default NavLinkItem;