import React,  { useState } from 'react';

// Private

const AVAILABLE_THEMES = ["AliceBlue", "Azure", "DarkOrchid", "DarkSalmon","Gainsboro","GhostWhite","LightPink","LimeGreen","Wheat"];
const LOCALSTORAGE_KEY = 'currentTheme';

const loadThemeFromLocalStorage = () => {
    const serializedTheme = localStorage.getItem(LOCALSTORAGE_KEY);
    if( serializedTheme )
        return JSON.parse(serializedTheme);
    else
        return null;
};

const saveThemeToLocalStorage = ( theme ) => {
    const serializedTheme = JSON.stringify(theme);
    localStorage.setItem(LOCALSTORAGE_KEY, serializedTheme);
};

// Exposed

const ThemeContext = React.createContext({
    themes: AVAILABLE_THEMES,
    currentTheme: AVAILABLE_THEMES[0],
    setCurrentThemeOnChange: () => { console.error("calling setCurrentThemeonChange outside a ThemeProvider")}
});

const ThemeConsumer = ThemeContext.Consumer;


// Create a ThemeProvider that manage the context in its state and accept
// any kind of "children" components
// hooks are used in order to manage state
const ThemeProvider= ({children})=> {
    //load the currentTheme from localStorage
    const theme  = loadThemeFromLocalStorage() || AVAILABLE_THEMES[3];

    // Initialize the current theme state
    const [currentTheme, setCurrentTheme] = useState(theme);

    // Initialize the context function to update the state and save
    const changeTheme = theme => {
        setCurrentTheme(theme);
        saveThemeToLocalStorage(theme);
    };

    const providerData = {
        themes: AVAILABLE_THEMES,
        currentTheme,
        changeTheme
    };
    return(
        <ThemeContext.Provider value={providerData}>
            {children}
        </ThemeContext.Provider>
    )
};

export {
    ThemeContext,
    ThemeProvider,
    ThemeConsumer,
}