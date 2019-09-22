import React from "react";
//import "./GalleryItem.css";
import Picture from "../Picture/Picture";
import Description from "../Description/Description";
import { Row } from "react-bootstrap";

function GalleryItem({url,description})  {
  
    return (
        <Row className="m-2 justify-content-start border border-dark rounded-lg">
            <Picture url={url} /> 
            <Description description={description} />
        </Row>        
    )
  
}

export default GalleryItem;
