import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";

function Navigation({style,...otherProps}) {
  return (    
    <Navbar style={{...style}} {...otherProps}>
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/quote">Quote</Nav.Link>
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as={Link} to="/todoapp">ToDoApp</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;