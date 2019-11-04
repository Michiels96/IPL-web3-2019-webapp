import React,  { useState } from 'react';
export const themes = ["AliceBlue", "Azure", "DarkOrchid", "DarkSalmon","Gainsboro","GhostWhite","LightPink","LimeGreen","Wheat"];

export const ThemeContext = React.createContext({
  themes:[...themes],
  currentTheme: themes[0], // default value
  setCurrentThemeOnChange: () => {}
});

// Create a ThemeProvider that manage the context in its state and accept
// any kind of "children" components
// hooks are used in order to manage state
export const ThemeProvider= ({children})=> {
    //load the currentTheme from localStorage
    const retrievedTheme = localStorage.getItem('currentTheme');    
    let theme ;
    if (retrievedTheme===null)
        theme=themes[3];
    else
        {
        const retrievedThemeObject = JSON.parse(retrievedTheme);
        theme = retrievedThemeObject.color;
        }
   
    // Initialize the current theme state
    const [currentTheme,setCurrentTheme] = useState(theme);
    // Initialize the context function to update the state
    const setCurrentThemeOnChange = color => {
        // Store the currentTheme in the localStorage
        const currentTheme = {color:color};
        localStorage.setItem('currentTheme', JSON.stringify(currentTheme));
        // Update the state
        return setCurrentTheme(color);
    }
    const providerData = {themes,currentTheme,setCurrentThemeOnChange};
    return(
        <ThemeContext.Provider value={providerData}>
            {children}
        </ThemeContext.Provider>
    )

    
}

