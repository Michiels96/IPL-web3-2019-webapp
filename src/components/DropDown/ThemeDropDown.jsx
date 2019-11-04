import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { ThemeContext } from "../Context/Theme";

export const ThemeDropDown = ({ title, ...otherProps }) => {
  const { themes, setCurrentThemeOnChange } = useContext(ThemeContext);
  //Style attribute: https://reactjs.org/docs/dom-elements.html#style
  const dropDownItems = themes.map((value, index) => (
    <Dropdown.Item 
      key={index} 
      as="button" 
      style={{ backgroundColor: value }}
      >
      {value}
    </Dropdown.Item>
  ));
  const onSelectTheme = (eventKey, event) => {
    setCurrentThemeOnChange(event.target.innerText);
  };
  return (
    <Dropdown onSelect={onSelectTheme}>
      <Dropdown.Toggle
        {...otherProps}
        variant="border-dark"
        id="dropdown-basic"
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>{dropDownItems}</Dropdown.Menu>
    </Dropdown>
  );
};
