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
    console.log("render:",this.state.items);
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
  //To be completed (arguments and function body)
  setNewItemPicture(newValue) {
      const formItem = {...this.state.formItem};

    //console.log('before:',this.state.formItem);
    formItem.picture = newValue;
    //console.log('after:',this.state.formItem);

    console.log("GalleryContainer::setNewItemPicture", newValue);
    console.log("form item:",formItem);
    this.setState({
      formItem: formItem
    });
  }

  saveNewItem() {

    // Prepare the reset of the state for the formItem
    const formItem = {...this.state.formItem};
    //console.log("formItem state prior:",this.state.formItem);
    formItem.picture = "";
    formItem.description = "";

    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state    
    this.setState(state =>{
      const items_updated = state.items.concat({...state.formItem});
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
  updateItem() {
    
  }
}

export default GalleryContainer;
