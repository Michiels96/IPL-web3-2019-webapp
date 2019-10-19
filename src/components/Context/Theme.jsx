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
    //load the currentTheme (color) from localStorage
    let theme = localStorage.getItem('currentTheme');
    if (theme===null)
        theme=themes[3];
    else
        console.log("Theme color loaded from localStorage:",theme);
    // Initialize the current theme state
    const [currentTheme,setCurrentTheme] = useState(theme);
    // Initialize the context function to update the state
    const setCurrentThemeOnChange = color => {
        // Store the currentTheme in the localStorage
        localStorage.setItem('currentTheme',color);
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

