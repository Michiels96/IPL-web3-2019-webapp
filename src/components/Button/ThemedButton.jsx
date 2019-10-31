import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import {ThemeContext} from "../Context/Theme";

export const ThemedButton = ({text, ...otherProps}) => {
        const {currentTheme} = useContext(ThemeContext); 
        //Style attribute: https://reactjs.org/docs/dom-elements.html#style
        const buttonStyle = {backgroundColor:currentTheme}
          return (
              
            <Button {...otherProps} style={buttonStyle}>
                {text}
            </Button>
        
          )
}
        
       
        
      
