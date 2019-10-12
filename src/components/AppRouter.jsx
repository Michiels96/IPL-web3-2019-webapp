import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
// Use of BrowserRouter to get regular URL (without the #)
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./DashboardPage/DashboardPage";
import Navigation from "./Navigation/Navigation";
import Quote from "./Quote/Quote";
import Title from "./Title/Title";
import GalleryContainer from "./Gallery/Gallery.container";


function AppRouter() {   
  return (
    <Router>
      <Navigation />

      <Switch>
        {/* <Route component={DashboardPage} /> */}
        {/* When a <Switch> is rendered, it searches through its children <Route> 
          elements to find one whose path matches the current URL. 
          When it finds one, it renders that <Route> and ignores all others. 
            This means that you should put <Route>s with more specific 
              (typically longer) paths before less-specific ones. */}
        <Route path="/quote">
          <Title>Citations</Title>
          <Quote message="Never trust a computer you can't throw out a window." author="Steve Wozniak"></Quote>
          {/* <Quote /> */}
        </Route>
        <Route path="/gallery">
          <Title>Gallery</Title>
          <GalleryContainer />
        </Route>
        <Route path="/">
          <DashboardPage />
        </Route>
      </Switch>
      {/* In order to pass props to a component being rendered by React Router, you
      need to use its render props : https://reacttraining.com/react-router/web/api/Route/render-func */}
      {/* <Route render={(data) => <Gallery data={galleryData} />} /> */}
    </Router>
  );
}

export default AppRouter;
