import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import { AuthenticationContext } from "components/Context/Authentication";


function Navigation({style,...otherProps}) {
  const {isAuthenticated} = useContext(AuthenticationContext);
  return (    
    <Navbar style={{...style}} {...otherProps} expand="sm">
      <Navbar.Brand as={Link} to="/" className="ml-3">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
      {!isAuthenticated()&&
        <Nav.Link as={Link} to="/login">Login</Nav.Link>}


        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/quote">Quote</Nav.Link>
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as={Link} to="/todoapp">ToDoApp</Nav.Link>
        {isAuthenticated()&&
        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
      </Nav>
    </Navbar>
  );
}

export default Navigation;