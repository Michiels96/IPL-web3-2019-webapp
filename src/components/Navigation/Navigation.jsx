import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import NavLinkItem from "./NavLinkItem";


function Navigation({style,...otherProps}) {
  return (    
    <Navbar style={{...style}} {...otherProps} expand="sm">
      <Navbar.Brand as={Link} to="/" className="ml-3">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLinkItem as={Link} to="/">Dashboard</NavLinkItem>
        <NavLinkItem as={Link} to="/quote">Quote</NavLinkItem>
        <NavLinkItem as={Link} to="/gallery">Gallery</NavLinkItem>
        <NavLinkItem as={Link} to="/todoapp">ToDoApp</NavLinkItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;