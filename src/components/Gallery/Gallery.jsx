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
  setNewItemExternalPicture,
  setExistingItemText,
  saveNewItem,
  removeItem,
  updateItem,
  available_pictures,
}) {
  return (
    <Container fluid>
      {items.map((item, index) => {
        const { description, picture } = item;

        return (
          <GalleryItem
            key={item._id}
            id={item._id}
            picture={picture}
            description={description}
            removeItem={removeItem}
            updateItem={updateItem}
            setExistingItemText={setExistingItemText}
          />
        );
      })}
      <GalleryItemForm 
        formItem={formItem}
        setNewItemText={setNewItemText}
        setNewItemPicture={setNewItemPicture}
        setNewItemExternalPicture={setNewItemExternalPicture}
        saveNewItem={saveNewItem}
        available_pictures={available_pictures}
      />
    </Container>
  );
}

export default Gallery;
