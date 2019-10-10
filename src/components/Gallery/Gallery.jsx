import React from "react";
import GalleryItem from "./Item/GalleryItem";
import GalleryItemForm from "./Form/GalleryItemForm";
//Bootstrap containers
import { Container } from "react-bootstrap";
//Bootstrap CSS : https://react-bootstrap.github.io/getting-started/introduction
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

function Gallery({
  items,
  formItem,
  setNewItemText,
  setNewItemPicture,
  saveNewItem,
  removeItem,
}) {
  return (
    <Container fluid>
      {items.map((item, index) => {
        const { description, picture } = item;

        return (
          <GalleryItem
            key={index}
            id={index}
            picture={picture}
            description={description}
            removeItem={removeItem}
          />
        );
      })}
      <GalleryItemForm 
        formItem={formItem}
        setNewItemText={setNewItemText}
        setNewItemPicture={setNewItemPicture}
        saveNewItem={saveNewItem}
      />
    </Container>
  );
}

export default Gallery;
