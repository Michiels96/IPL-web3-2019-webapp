import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import {ThemeContext} from '../../contexts/Theme/Theme';;

export const ThemeDropDown = ({ title, ...otherProps }) => {
  const { themes, changeTheme } = useContext(ThemeContext);

  const onSelectTheme = (eventKey, event) => {
      changeTheme(event.target.innerText);
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

      <Dropdown.Menu>
          { themes.map((value, index) => (
              //Style attribute: https://reactjs.org/docs/dom-elements.html#style
              <Dropdown.Item
                  key={index}
                  as="button"
                  style={{ backgroundColor: value }}
              >
                  {value}
              </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
