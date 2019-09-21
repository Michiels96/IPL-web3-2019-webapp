import React from "react";
//import Picture from "../Picture/Picture";
import GalleryItem from "../Gallery/GalleryItem";
// dynamic loading : https://survivejs.com/webpack/techniques/dynamic-loading/
var images = require.context('../../img', true);


class Gallery extends React.Component {
  render() {
    const galleryItems = this.props.data.map((item,index) => (
        item.picture!=="" ?
            <GalleryItem key={index}  url={images("./" + item.picture)} description={item.description} />
        :
            <GalleryItem key={index}  url="" description={item.description} />
    ));

    return <div>{galleryItems}</div>;
  }
}

export default Gallery;
