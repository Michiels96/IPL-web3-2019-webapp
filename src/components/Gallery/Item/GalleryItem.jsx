import React from "react";
import { Row } from "react-bootstrap";
import Picture from "../../Picture/Picture";
import Description from "../../Description/Description";

function GalleryItem({
    picture,
    description
})  {
  
    return (
        <Row className="m-2 justify-content-start border border-dark rounded-lg">
            <Picture picture={picture} /> 
            <Description description={description} />
        </Row>        
    )
  
}

export default GalleryItem;
