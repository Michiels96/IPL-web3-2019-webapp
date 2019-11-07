import React from 'react'

import './App.css'

import Layout from './Layout'
import {ThemeProvider} from '../../contexts/Theme/Theme';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
        <Router>
            <Layout />
        </Router>
    </ThemeProvider>    
  )
}

export default App;
