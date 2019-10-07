import React from "react";
//import "./GalleryItem.css";
import Picture from "../Picture/Picture";
import NullPicture from "../Picture/NullPicture";
import withNull from "../Utilities/withNull";


import Description from "../Description/Description";
import NullDescription from "../Description/NullDescription";
import { Row } from "react-bootstrap";

const WithNullPicture = withNull("url", NullPicture)(Picture);
const WithNullDescription = withNull("description", NullDescription)(Description);

function GalleryItem({url,description})  {
  
    return (
        <Row className="m-2 justify-content-start border border-dark rounded-lg">
            <WithNullPicture url={url} /> 
            <WithNullDescription description={description} />
        </Row>        
    )
  
}

export default GalleryItem;
