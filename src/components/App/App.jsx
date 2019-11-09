import React from "react";

import "./App.css";

import Layout from "./Layout";
import { ThemeProvider } from "../../contexts/Theme/Theme";
import { AuthenticationProvider } from "../Context/Authentication";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </AuthenticationProvider>
  );
}

export default App;
