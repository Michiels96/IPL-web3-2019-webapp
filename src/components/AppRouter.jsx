import React from "react"

import { HashRouter as Router, Route } from "react-router-dom"

import DashboardPage from "./DashboardPage/DashboardPage"



function AppRouter() {
  return (
    <Router>
      <Route component={DashboardPage} />
    </Router>
  )
}

export default AppRouter
