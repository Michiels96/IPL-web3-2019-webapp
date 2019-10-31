import React,{useContext} from "react";

import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import DashboardPage from "./DashboardPage/DashboardPage";
import Navigation from "./Navigation/Navigation";
import Quote from "./Quote/Quote";
import Title from "./Title/Title";
import GalleryContainer from "./Gallery/Gallery.container";
import ToDoAppContainer from "./TodoApp/Containerized/TodoApp.Container";
import {ThemeContext} from './Context/Theme';
import {ThemeDropDown} from './DropDown/ThemeDropDown';
import { Container,Row,Col } from "react-bootstrap";
import LoginContainer from "./Login/LoginContainer";
import { AuthenticationContext } from "./Context/Authentication";
import {Logout} from "./Logout/Logout";
function AppRouter() { 
  const {currentTheme} = useContext(ThemeContext);
  const {isAuthenticated} = useContext(AuthenticationContext);
  console.log("Authent:", isAuthenticated());
  return (
    <Router>      
      <Container fluid >
        <Row >
          <Col className="p-0 m-0">
            <Navigation style={{backgroundColor: currentTheme}} variant="dark" />
          </Col>
        </Row>
       
          <Switch>           
            {/* <Route component={DashboardPage} /> */}
            {/* When a <Switch> is rendered, it searches through its children <Route> 
              elements to find one whose path matches the current URL. 
              When it finds one, it renders that <Route> and ignores all others. 
                This means that you should put <Route>s with more specific 
                  (typically longer) paths before less-specific ones. */}

            <Route path="/login" component={LoginContainer} />  
            <Route path="/logout" component={Logout} />     
      
            <Route path="/quote">  
              {!isAuthenticated() && <Redirect to="/login" />}             
              <Row>
                <Col>
                  <Title>Citations</Title>
                  <Quote message="Never trust a computer you can't throw out a window." author="Steve Wozniak"></Quote>
                </Col>
              </Row>
            </Route>
            <Route path="/gallery">
              {!isAuthenticated() && <Redirect to="/login" />}              
              <Title>Gallery</Title>
              <GalleryContainer />
            </Route>
            <Route path="/todoapp">
             {!isAuthenticated() && <Redirect to="/login" />} 
              <Row >
                <Col>
                  <Route path="/todoapp" component={ToDoAppContainer} />
                </Col>
              </Row>
            </Route>
            
            
            <Route path="/" component={DashboardPage} >              
              {!isAuthenticated() && <Redirect to="/login" />} 
            </Route>
            
          </Switch>  
        <Row >
          <Col className="p-0 m-0">
            <footer className="mt-3 mb-0 text-center" style={{backgroundColor: currentTheme}}>
              <ThemeDropDown className="bg-white d-inline my-3" title="Select current theme"/>
            </footer>
          </Col>
        </Row>        

      </Container>
      
      {/* In order to pass props to a component being rendered by React Router, you
      need to use its render props : https://reacttraining.com/react-router/web/api/Route/render-func */}
      {/* <Route render={(data) => <Gallery data={galleryData} />} /> */}
    </Router>
  );
}

export default AppRouter;
