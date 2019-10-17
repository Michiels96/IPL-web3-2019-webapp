import React,  { useState } from 'react';
export const THEMES = ["primary", "secondary", "success", "dark"];

export const ThemeContext = React.createContext({
  themes:[...THEMES],
  currentTheme: THEMES[3], // default value
  setCurrentTheme: () => {}
});

// Create a ThemeProvider that manage the context in its state and accept
// any kind of "children" components
// hooks are used in order to manage state
export const ThemeProvider= ({children})=> {
    const [currentTheme,setCurrentTheme] = useState(THEMES[3]);
    const [themes,setThemes] = useState([...THEMES]);
    const setCurrentThemeOnChange = (index) => {setCurrentTheme(themes[index])};
    const providerData = {themes,currentTheme,setCurrentTheme};
    return(
        <ThemeContext.Provider value={providerData}>
            {children}
        </ThemeContext.Provider>
    )

    
}

