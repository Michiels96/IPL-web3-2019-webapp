import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import NavLinkItem from "./NavLinkItem";
import { AuthenticationContext } from "contexts/Authentication/Authentication";


function Navigation({style,...otherProps}) {
  const {isAuthenticated} = useContext(AuthenticationContext);
  return (    
    <Navbar style={{...style}} {...otherProps} expand="sm">
      <Navbar.Brand as={Link} to="/" className="ml-3">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        {! isAuthenticated() && <NavLinkItem as={Link} to="/login">Login</NavLinkItem>}
        <NavLinkItem as={Link} to="/">Dashboard</NavLinkItem>
        <NavLinkItem as={Link} to="/quote">Quote</NavLinkItem>
        <NavLinkItem as={Link} to="/gallery">Gallery</NavLinkItem>
        <NavLinkItem as={Link} to="/todoapp">ToDoApp</NavLinkItem>
        {isAuthenticated() && <NavLinkItem as={Link} to="/logout">Logout</NavLinkItem>}
      </Nav>
    </Navbar>
  );
}

export default Navigation;