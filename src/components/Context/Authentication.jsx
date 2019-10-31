import React,  { useState } from 'react';

export const AuthenticationContext = React.createContext({
  JWT:"",
  isAuthenticated: () => {},
  setCurrentJWT:() => {},
});

export const AuthenticationProvider= ({children})=> {
   
    // Initialize the current JWT
    const [JWT,setJWT] = useState("");
    // Initialize the context function to return authentication status
    const isAuthenticated = () => {
        return JWT !=="";
    }
    // Initialize the context function to update the state
    const setCurrentJWT = (token) => {        
        // Update the state
        return setJWT(token);
    }
    const providerData = {JWT,isAuthenticated,setCurrentJWT};
    return(
        <AuthenticationContext.Provider value={providerData}>
            {children}
        </AuthenticationContext.Provider>
    )    
}

