import React from "react";
import "./Picture.css";
import NoPicture from "../Picture/NoPicture";

class Picture extends React.Component {    
  render() {
    if(this.props.url !== "" && this.props.url!==null && this.props.url!==undefined )
        return <div className="galleryItemImg"><img src={this.props.url} alt="Loading" /></div> 
    else
        return <NoPicture />;
    
    // dynamic import to be further studied... 
    //return <img src={import(/* webpackChunkName: "image", webpackPreload:true */ "../../img/"+this.props.url)} alt="Loading" />
    //const image = getImg(this.props.url);
    //return <img src={image} alt="Loading" />
  }
}

// dynamic import to be further studied... 
// async function getImg(url) {
//     try{
//     /* webpackMode: "eager" */
//     const img = await import(/* webpackChunkName: "image", webpackPreload:true */ "../../img/"+url);//url);
//     return img.default;
//     }
//     catch(err){
//         console.log("Error:",err);
//     }
    
    
//  }

export default Picture;

  
 