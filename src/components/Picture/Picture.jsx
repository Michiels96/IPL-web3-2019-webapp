import React from "react";
import withNull from "hoc/withNull";
import { Image,Col } from "react-bootstrap";
import NullPicture from "./NullPicture";

function Picture({
      picture
}) {  
      return <Col md={4} className="m-2"><Image fluid src={picture} alt="Loading" /></Col> ;   
}

const improve = withNull("picture", NullPicture);

export default improve(Picture);