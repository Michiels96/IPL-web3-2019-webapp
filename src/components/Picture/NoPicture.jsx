import React from "react";
import "./Picture.css";
var images = require.context('../../img', true);
class NoPicture extends React.Component {    
  render() {
    //the public folder is currently not used...    
    return <div className="galleryItemImg"><img src={images("./notFound.jpg")} alt="Loading" /></div> 
    
  }
}
export default NoPicture;

  
 