import React from "react";
import GalleryItem from "./Item/GalleryItem";
import GalleryItemForm from "./Form/GalleryItemForm";
//Bootstrap CSS : https://react-bootstrap.github.io/getting-started/introduction
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

function Gallery({
  items,
  formItem,
  setNewItemText,
  setNewItemPicture,
  setNewItemExternalPicture,
  setNewItemInternalPicture,
  setExistingItemText,
  saveNewItem,
  removeItem,
  updateItem,
  availablePictures,
}) {
  return (
    <div>
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
        setNewItemInternalPicture = {setNewItemInternalPicture}
        saveNewItem={saveNewItem}
        availablePictures={availablePictures}
      />
    </div>
  );
}

export default Gallery;
