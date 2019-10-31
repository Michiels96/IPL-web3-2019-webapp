import React, {useState} from "react";
import { Image, Col } from "react-bootstrap";
import {extractFileContent} from "../../utils/FileLibrary"
const MAX_SIZE=1048576;

const LoadPicture = ({setNewItemInternalPicture}) => {
   let labelFileInput = React.createRef(); 

   const handleFileChangeEvent= (e) => {

    labelFileInput.current.innerText=e.target.files[0].name;

    extractFileContent(e,MAX_SIZE,"image")
    .then(result => {
      setNewItemInternalPicture(result);
      } )
    .catch(err => alert(err));
  }
      return (
        <div className="custom-file ">
          {/* In React, an <input type="file" /> is always an uncontrolled 
          component because its value can only be set by a user, 
          and not programmatically. */}
          <input type="file" accept="image/*" 
            className="custom-file-input" 
            onChange={handleFileChangeEvent}
            placeholder="Select an internal picture" />
          <label ref={labelFileInput} className="custom-file-label">Upload your image</label>
        </div>
      );   
  }


export default LoadPicture;
