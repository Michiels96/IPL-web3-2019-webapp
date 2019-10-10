import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import DashboardPage from "./DashboardPage/DashboardPage";


function AppRouter() {   
  return (
    <Router>
      <Route component={DashboardPage} />
      
      {/* In order to pass props to a component being rendered by React Router, you
      need to use its render props : https://reacttraining.com/react-router/web/api/Route/render-func */}
      {/* <Route render={(data) => <Gallery data={galleryData} />} /> */}
    </Router>
  );
}

export default AppRouter;
