import React from 'react'

import './App.css'

import AppRouter from '../AppRouter'
import {ThemeProvider} from '../Context/Theme';


function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>    
  )
}

export default App;
