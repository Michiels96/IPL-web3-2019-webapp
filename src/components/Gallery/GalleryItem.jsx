import React from "react";
import "./GalleryItem.css";
import Picture from "../Picture/Picture";
import Description from "../Description/Description";

class GalleryItem extends React.Component {
  render() {
    return (
        <div className="main">
            <Picture url={this.props.url} /> 
            <Description description={this.props.description} />
        </div>
    )
  }
}

export default GalleryItem;
