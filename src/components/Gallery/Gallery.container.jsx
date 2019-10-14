import React from "react";
import Gallery from "./Gallery";

//const gallery_api_URL= "http://localhost:8080/gallery/";
// Understanding CORS Ajax issues : https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations
// & https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
//Check Proxying API Requests in Development :
// https://create-react-app.dev/docs/proxying-api-requests-in-development
const gallery_api_URL="/api/gallery/";

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

const AVAILABLE_PICTURES = [
  "welcome-heart.jpg",
  "welcome-keep-calm.jpg",
  "welcome-sky.jpg",
  "welcome-team.jpg",
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
        available_pictures={AVAILABLE_PICTURES}
      />
    );
  }

  async componentDidMount() {
    try {
      const items = await this.loadItems();
      if (items!==undefined)
        this.setState({
          items: items
        });
    } catch (err) {
      console.error("Error in comonentDidMount:", err);
    }
  }

  loadItems() {
    console.log("loadItems");

    fetch(gallery_api_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });        
      })
      .catch(err => console.error("Error when fetching gallery API:", err));
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
    
    const updatedItems = [
      ...this.state.items
    ]

    
    const index_found = this.state.items.findIndex(item => {
      return item._id === item_id;
    });

    console.log("Index:",index_found);
    
    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state
    if (index_found > -1) {
      updatedItems[index_found].description = newValue;
      console.log("updated items... : ",updatedItems);
      this.setState(state => {  
        return {
          items:updatedItems,
        };
      });
    }
    console.log("state:",this.state.items);
  
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

  async saveNewItem() {
    const formItem = {...this.state.formItem};
    // use formItem.externalPicture if it is not empty, else use formItem.picture    
    let picture = this.state.formItem.externalPicture !== "" ? this.state.formItem.externalPicture : this.state.formItem.picture;
    //in case there were no change event (no picture selected), set the picture to default value
    if (picture ==="")
      picture = AVAILABLE_PICTURES[0];
    
    const item = {picture:picture,description:formItem.description};

    try{
    console.log("GalleryContainer::saveNewItem :",item);
    let response = await fetch(gallery_api_URL,{
      method: "POST",
      body: JSON.stringify(item), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
        }
      });
    let result = await response.json();
    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state (else formItem.picture, when no picture is selected, has not the right value)
    this.setState(state =>{
      // Prepare the reset of the state for the formItem    
      formItem.picture = "";
      formItem.externalPicture ="";
      formItem.description = "";
      //const items_updated = state.items.concat({...state.formItem});      
      const items_updated = [...state.items,
        {...result} ];
      return {
        items:items_updated,
        formItem:formItem,
      }
    })   

    }
    catch(err){
      console.error("saveNewItem : Error when fetching gallery API :", err);
      alert("Your item has not been recorded into the DB. Error when contacting the API : ",err);
    }
  }

  async removeItem(item_id) {
    // retrieve the item in the state based on the id
    console.log("delete:",item_id);
    const index_found = this.state.items.findIndex(item => {
      return item._id === item_id;
    });
   
    //Since the state is based on the previous state, we need to use a callback
    //to ensure that we use the previous state
    if (index_found > -1) {
      try{
        console.log("GalleryContainer::removeItem :",item_id);
        let response = await fetch(gallery_api_URL+item_id,{
          method: "delete",          
          });
        let result = await response.json();

        this.setState(state => {
          // don't mutate the original state.data arrow, so use slice & concat()
          const items_updated = state.items.slice(0, index_found).concat(state.items.slice(index_found+1));
          return {
            items:items_updated,
          };
        });

        }
        catch(err){
          console.error("deleteItem : Error when fetching gallery API :", err);
          alert("Your item has not been deleted from the DB. Error when contacting the API : ",err);
        }     
    }
  }
  async updateItem(item_id) {
    console.log("Make call to API for element with id:",item_id," .Update with", this.state.items[item_id]);
    // retrieve the item in the state based on the id
    const index_found = this.state.items.findIndex(item => {
      return item._id === item_id;
    });

    if (index_found > -1) {
      try{
        const updatedItems = [
          ...this.state.items
        ]
        console.log("GalleryContainer::updateItem :",item_id);
        let response = await fetch(gallery_api_URL+item_id,{
          method: "PUT", 
          body: JSON.stringify( updatedItems[index_found]), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json"
          }         
          });
        let result = await response.json();
        }
        catch(err){
          console.error("updateItem : Error when fetching gallery API :", err);
          alert("Your item has not been updated in the DB. Error when contacting the API : ",err);
        }     
    }
  }
}

export default GalleryContainer;
