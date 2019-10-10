import React from "react";
import { Col } from "react-bootstrap";
import ContentEditable from "react-contenteditable";

function NullDescription({ id,setExistingItemText }) {
  //mx-2 mx-md-auto : center the description from medium viewport (even though the row align content from start)
  //m-2 my-md-auto : add margin for small viewport, else center the
  const onDescriptionChangeEvent = e => {
    console.log("On CHANGE in NullDescription : )");
    //The call to this function will update the item description 
    //Since the description prop will no longer be null, the Descrition will be displayed
    //displayed
    return setExistingItemText(id, e.target.value);
  };

  return (
    <Col
      md={6}
      className="my-2 mx-2 mx-md-auto border border-secondary rounded-lg"
    >
      <ContentEditable
        html="Please enter a description."
        onChange={onDescriptionChangeEvent}
      />
      
    </Col>
  );
}

export default NullDescription;
