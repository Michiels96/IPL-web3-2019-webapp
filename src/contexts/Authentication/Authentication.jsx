import React,  { useState } from 'react';

const LOCALSTORAGE_KEY = 'token';

export const AuthenticationContext = React.createContext({
  JWT:"",
  isAuthenticated: () => {},
  setCurrentJWT:() => {},
});

const loadTokenFromLocalStorage = () => {
    const serializedToken = localStorage.getItem(LOCALSTORAGE_KEY);
    if( serializedToken )
        return JSON.parse(serializedToken);
    else
        return "";
};

const saveTokenToLocalStorage = ( token ) => {
    const serializedToken = JSON.stringify(token);
    localStorage.setItem(LOCALSTORAGE_KEY, serializedToken);
};


export const AuthenticationProvider= ({children})=> {
    //load the token from localStorage
    const storedJWT  = loadTokenFromLocalStorage();
    
    // Initialize the current JWT    
    const [JWT,setJWT] = useState(storedJWT);    
    // Initialize the context function to return authentication status
    const isAuthenticated = () => {
        return JWT !=="";
    }
    // Initialize the context function to update the state and save to localStorage
    const setCurrentJWT = (token) => {              
         setJWT(token);
         saveTokenToLocalStorage(token);
    }
    const providerData = {JWT,isAuthenticated,setCurrentJWT};
    return(
        <AuthenticationContext.Provider value={providerData}>
            {children}
        </AuthenticationContext.Provider>
    )    
}

