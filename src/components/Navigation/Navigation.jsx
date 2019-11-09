import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
<<<<<<< HEAD
import NavLinkItem from "./NavLinkItem";
=======
import { AuthenticationContext } from "components/Context/Authentication";
>>>>>>> recap


function Navigation({style,...otherProps}) {
  const {isAuthenticated} = useContext(AuthenticationContext);
  return (    
    <Navbar style={{...style}} {...otherProps} expand="sm">
      <Navbar.Brand as={Link} to="/" className="ml-3">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
<<<<<<< HEAD
        <NavLinkItem as={Link} to="/">Dashboard</NavLinkItem>
        <NavLinkItem as={Link} to="/quote">Quote</NavLinkItem>
        <NavLinkItem as={Link} to="/gallery">Gallery</NavLinkItem>
        <NavLinkItem as={Link} to="/todoapp">ToDoApp</NavLinkItem>
=======
      {!isAuthenticated()&&
        <Nav.Link as={Link} to="/login">Login</Nav.Link>}


        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/quote">Quote</Nav.Link>
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as={Link} to="/todoapp">ToDoApp</Nav.Link>
        {isAuthenticated()&&
        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
>>>>>>> recap
      </Nav>
    </Navbar>
  );
}

export default Navigation;