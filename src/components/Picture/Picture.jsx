import React from "react";
import NoPicture from "../Picture/NoPicture";
import { Image,Col } from "react-bootstrap";

function Picture({url}) {  
    if(url !== "" && url!==null && url!==undefined )
        return <Col md={4} className="m-2"><Image fluid src={url} alt="Loading" /></Col> 
    else
        return <NoPicture />;
   
}

export default Picture;

  
 