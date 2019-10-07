import React from "react";
import { Image,Col } from "react-bootstrap";

function Picture({url}) {  
      return <Col md={4} className="m-2"><Image fluid src={url} alt="Loading" /></Col> ;   
}

export default Picture;

  
 