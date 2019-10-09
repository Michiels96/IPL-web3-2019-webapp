import React from "react";
import Gallery from "./Gallery";

const DEFAULT_ITEMS = [
  {
    picture: "welcome-keep-calm.jpg",
    description: "This picture is one among..."
  },
  {
    picture: "",
    description: "",
  }
];

class GalleryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      formItem: {
        picture: "",
        description: "",
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
      console.error("Error in comonentDidMount:", err);
    }
  }

  loadItems() {
    return new Promise((resolve, reject) => {
      resolve(DEFAULT_ITEMS);
    });
  }
  setNewItemText(newValue) {
    const { 
      formItem 
    } = this.state;

    formItem.description = newValue;

    console.log("GalleryContainer::setNewItemText", newValue);

    this.setState({
      formItem: formItem
    });
  }
  //To be completed (arguments and function body)
  setNewItemPicture(newValue) {
    const { 
      formItem 
    } = this.state;

    formItem.picture = newValue;

    console.log("GalleryContainer::setNewItemPicture", newValue);

    this.setState({
      formItem: formItem
    });
  }
  saveNewItem() {
    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state
    this.setState(state =>{
      const items_updated = state.items.concat(state.formItem);
      return {
        items:items_updated,
      }
    })
  }

  removeItem() {}
  updateItem() {
    
  }
}

export default GalleryContainer;
