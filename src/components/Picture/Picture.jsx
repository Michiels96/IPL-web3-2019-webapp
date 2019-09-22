import React from "react";
//import "./Picture.css";
import NoPicture from "../Picture/NoPicture";
import { Image,Col } from "react-bootstrap";

// dynamic loading : https://survivejs.com/webpack/techniques/dynamic-loading/
var images = require.context('./img', true);
// NB : we could also put the images in the /public/img folder. In this case, 
// Webpack would not process it, it would be copied into the build folder untouched.
// Here the image are "encapsulated" with the picture component...


function Picture({url}) {  
    if(url !== "" && url!==null && url!==undefined )
        return <Col md={4} className="m-2"><Image fluid src={images("./" + url)} alt="Loading" /></Col> 
    else
        return <NoPicture />;
   
}

export default Picture;

  
 