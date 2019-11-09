import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {ThemeContext} from '../../contexts/Theme/Theme';

;

export const ThemedButton = ({text, ...otherProps}) => {
<<<<<<< HEAD
    const {currentTheme} = useContext(ThemeContext);

    const buttonStyle = {
        backgroundColor: currentTheme
    };

    return (
        // Style attribute: https://reactjs.org/docs/dom-elements.html#style
        <Button
            {...otherProps}
            style={buttonStyle}
        >
            {text}
        </Button>
    );
};
=======
        const {currentTheme} = useContext(ThemeContext); 
        //Style attribute: https://reactjs.org/docs/dom-elements.html#style
        const buttonStyle = {backgroundColor:currentTheme}
          return (
              
            <Button {...otherProps} style={buttonStyle}>
                {text}
            </Button>
        
          )
}
        
       
        
      
>>>>>>> recap
