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
        externalPicture:"",
        description: "",
      }
    };

    this.setNewItemText = this.setNewItemText.bind(this);
    this.setExistingItemText = this.setExistingItemText.bind(this);
    this.setNewItemPicture = this.setNewItemPicture.bind(this);
    this.setNewItemExternalPicture = this.setNewItemExternalPicture.bind(this);
    this.saveNewItem = this.saveNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  render() {
    console.log("render:",this.state.items);
    return (
      <Gallery
        items={this.state.items}
        formItem={this.state.formItem}
        setNewItemText={this.setNewItemText}
        setExistingItemText={this.setExistingItemText}
        setNewItemPicture={this.setNewItemPicture}
        setNewItemExternalPicture={this.setNewItemExternalPicture}
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
    console.log("loadItems")
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

  setExistingItemText(item_id, newValue) {
    console.log("GalleryContainer::setExistingItemText",newValue);

    const { items } = this.state;
    
    const updatedItems = {
      ...items,
    }

    // Currently the id is directly the item index in this.state.items
    const index_found = item_id;
    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state
    if (index_found > -1) {
      updatedItems[index_found].description = newValue;
      this.setState(state => {  
        return {
          items:updatedItems,
        };
      });
    }

    this.setState({
      items: items
    });
  }

  setNewItemPicture(newValue) {
    const formItem = {...this.state.formItem};
    formItem.picture = newValue;
    console.log("GalleryContainer::setNewItemPicture", newValue);
    this.setState({
      formItem: formItem
    });
  }

  setNewItemExternalPicture(newValue) {
    const formItem = {...this.state.formItem};
    formItem.externalPicture = newValue;
    console.log("GalleryContainer::setNewItemExternalPicture", newValue);
    this.setState({
      formItem: formItem
    });
  }

  saveNewItem() {

    // Prepare the reset of the state for the formItem
    console.log("VER£Y Prior to update... ", this.state.formItem);
    const formItem = {...this.state.formItem};
    formItem.picture = "";
    formItem.externalPicture ="";
    formItem.description = "";

    //https://apod.nasa.gov/apod/image/1907/SpotlessSunIss_Colacurcio_2048.jpg


    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state    
    this.setState(state =>{
      //const items_updated = state.items.concat({...state.formItem});
      // use formItem.externalPicture if it is not empty, else use formItem.picture
      const picture = state.formItem.externalPicture !== "" ? state.formItem.externalPicture : state.formItem.picture;
      const items_updated = [...state.items,{picture:picture, description:state.formItem.description} ];
      console.log("Prior to update... ", items_updated);
      return {
        items:items_updated,
        formItem:formItem,
      }
    })


     

  

  }

  removeItem(item_id) {
    // Currently the id is directly the item index in this.state.items
    const index_found = item_id;
    // retrieve the item in the state based on the id
    // const index_found = this.state.items.findIndex(item => {
    //   return item.id == current_id;
    // });
 
    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state
    if (index_found > -1) {
      this.setState(state => {
        // don't mutate the original state.data arrow, so use slice & concat()
        const items_updated = state.items.slice(0, index_found).concat(state.items.slice(index_found+1));
        return {
          items:items_updated,
        };
      });
    }
    

  }
  updateItem(item_id) {
    console.log("Make call to API for element with id:",item_id," .Update with", this.state.items[item_id]);
  }
}

export default GalleryContainer;
