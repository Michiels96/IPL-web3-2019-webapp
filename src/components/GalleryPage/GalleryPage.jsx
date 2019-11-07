import React from "react";
import Title from "../Title/Title";
import GalleryContainer from "../Gallery/Gallery.container";


function GalleryPage() {
  return (
    // <> is a shortcut for React.Fragment which because return must return a single component but we want to return
    // a sequence of components
    <>
      <Title>Gallery</Title>
      <GalleryContainer />
    </>
  );
}

export default GalleryPage;
