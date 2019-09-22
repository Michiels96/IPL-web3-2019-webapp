import React from "react";
import GalleryItem from "../Gallery/GalleryItem";
//Bootstrap containers
import { Container } from "react-bootstrap";
//Bootstrap CSS : https://react-bootstrap.github.io/getting-started/introduction
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery({data}){
   {
    const galleryItems = data.map((item,index) => (
        item.picture!=="" ?
            <GalleryItem key={index}  url={item.picture} description={item.description} />
        :
            <GalleryItem key={index}  url="" description={item.description} />
    ));

    return <Container fluid>{galleryItems}</Container>;
  }
}

export default Gallery;
