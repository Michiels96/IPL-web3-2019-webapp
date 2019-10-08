import React from "react";
import Gallery from "./Gallery";

const DEFAULT_ITEMS = [
  {    
    picture:"welcome-keep-calm.jpg",
    description: "This picture is one among..."
  },
  {
    picture: "",
    description: ""
  }
];

class GalleryContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      items: [],
      formItem: {
        picture: "",
        description: "",
      }
    }

    this.setNewItemText = this.setNewItemText.bind(this);
    this.setNewItemPicture = this.setNewItemPicture.bind(this);
    this.saveNewItem = this.saveNewItem.bind(this);
  }

  render() {
      return <Gallery
        items={this.state.items}
        formItem={this.state.formItem}

        setNewItemText={this.setNewItemText}
        setNewItemPicture={this.setNewItemPicture}
        saveNewItem={this.saveNewItem}
      />
  }

  async componentDidMount(){
    const items = await this.loadItems();
    this.setState({
      items: items,
    });
  }


  loadItems(){
    return new Promise((resolve, reject) => {
        resolve(DEFAULT_ITEMS);
    })
  }
  setNewItemText(newValue){
    const {
      formItem
    } = this.state;

    formItem.description = newValue;

    console.log("GalleryContainer::setNewItemText", newValue);

    this.setState({
      formItem: formItem,
    })
  }
  setNewItemPicture(){
  }
  saveNewItem(){
  }

}

export default GalleryContainer;
