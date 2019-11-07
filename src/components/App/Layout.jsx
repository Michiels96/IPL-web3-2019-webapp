import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import {ThemeContext} from '../../contexts/Theme/Theme';
import { ThemeDropDown } from "../DropDown/ThemeDropDown";
import { Container, Row, Col } from "react-bootstrap";
import PageRoute from "./PageRoute";

function Layout() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Container fluid>
      <Row>
        <Col className="p-0 m-0">
          <Navigation
            style={{ backgroundColor: currentTheme }}
            variant="dark"
          />
        </Col>
      </Row>

      <Row>
        <Col className="p-0 m-0">

          <PageRoute/>
         
        </Col>
      </Row>


      <Row>
        <Col className="p-0 m-0">
          <footer
            className="mt-3 mb-0 text-center"
            style={{ backgroundColor: currentTheme }}
          >
            <ThemeDropDown
              className="bg-white d-inline my-3"
              title="Select current theme"
            />
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
