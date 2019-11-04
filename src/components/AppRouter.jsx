import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";

function AppRouter() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default AppRouter;
