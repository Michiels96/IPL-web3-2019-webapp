import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {ThemeContext} from '../../contexts/Theme/Theme';

export const ThemedButton = ({text, ...otherProps}) => {
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
