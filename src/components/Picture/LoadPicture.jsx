import React from "react";
import { Image, Col } from "react-bootstrap";

const LoadPicture = ({setNewItemInternalPicture}) => {
   let labelFileInput = React.createRef(); 
   const handleOnChange = (e) => {
    // check that the MIME type is OK : JPEG or PNG or ? at the end of the string($), case insensitive (/i):/(jpeg|png)$/i
    // to be mor global, look for image in the MIME type : image at the beginning of the string (^)
    if(e.target.files[0].type.match(/^(image)/i))
      {      
      var reader  = new FileReader();
      // only allow to load a picture if this is < 1MB
      if (e.target.files[0].size <= 1048576)
        {
        // set the label to the file name (https://reactjs.org/docs/refs-and-the-dom.html)
        labelFileInput.current.innerText=e.target.files[0].name;

        reader.onload = function () {   
        setNewItemInternalPicture(reader.result);  
        }        
        /*The readAsDataURL method is used to read the contents of the 
        specified Blob or File. When the read operation is finished, 
        the readyState becomes DONE, and the loadend is triggered. 
        At that time, the result attribute contains the data as a 
        data: URL representing the file's data as a base64 encoded string.*/
        reader.readAsDataURL(e.target.files[0]);
        }
    else{
        alert("Your image is too large ("+ e.target.files[0].size / 1048576 + " MB). Please upload an image < 1MB." );
    }
    }   
  }
      return (
        <div className="custom-file ">
          {/* In React, an <input type="file" /> is always an uncontrolled 
          component because its value can only be set by a user, 
          and not programmatically. */}
          <input type="file" accept="image/*" 
            className="custom-file-input" 
            onChange={handleOnChange}
            //ref={textInput}
            placeholder="Select an internal picture" />
          <label className="custom-file-label " ref={labelFileInput}>Upload your image</label>
        </div>
      );   
  }


export default LoadPicture;
