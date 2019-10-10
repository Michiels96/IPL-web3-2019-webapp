import React from "react";
import Gallery from "./Gallery";

const DEFAULT_ITEMS = [
  {
    picture: "welcome-keep-calm.jpg",
    description: "This picture is one among..."
  },
  {
    picture: "",
    description: ""
  }
];

class GalleryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      formItem: {
        picture: "",
        description: ""
      }
    };

    this.setNewItemText = this.setNewItemText.bind(this);
    this.setNewItemPicture = this.setNewItemPicture.bind(this);
    this.saveNewItem = this.saveNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  render() {
    return (
      <Gallery
        items={this.state.items}
        formItem={this.state.formItem}
        setNewItemText={this.setNewItemText}
        setNewItemPicture={this.setNewItemPicture}
        saveNewItem={this.saveNewItem}
        removeItem={this.removeItem}
        updateItem={this.updateItem}
      />
    );
  }

  async componentDidMount() {
    try {
      const items = await this.loadItems();
      this.setState({
        items: items
      });
    } catch (err) {
      console.log("Error in componentDidMount:", err);
    }
  }

  loadItems() {
    return new Promise((resolve, reject) => {
      resolve(DEFAULT_ITEMS);
    });
  }
  setNewItemText(newValue) {
    console.log("GalleryContainer::setNewItemText", newValue);

    const { formItem } = this.state;
    
    const newFormItem = {
      ...formItem,
      description: newValue
    }
    this.setState({
      formItem: newFormItem
    });
  }
  //To be completed (arguments and function body)
  setNewItemPicture() {}
  saveNewItem() {}
  removeItem() {}
  updateItem() {
    
  }
}

export default GalleryContainer;
