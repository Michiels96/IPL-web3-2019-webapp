import React from "react";

import "./App.css";

import AppRouter from "../AppRouter";
import { ThemeProvider } from "../Context/Theme";
import { AuthenticationProvider } from "../Context/Authentication";

function App() {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </AuthenticationProvider>
  );
}

export default App;
