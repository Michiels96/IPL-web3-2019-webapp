import React from "react";
//import "./Picture.css";
import { Col, Image } from "react-bootstrap";
var images = require.context('./img', true);

function NoPicture() {    
  {
    //the public folder is currently not used...    
    return <Col md={4} className="m-2"><Image fluid src={images("./notFound.jpg")} alt="Loading" /></Col> 
  }
}
export default NoPicture;

  
 