import React from "react";
import Gallery from "./Gallery";

// Understanding CORS Ajax issues : https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations
// & https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

// Check Proxying API Requests in Development :
// https://create-react-app.dev/docs/proxying-api-requests-in-development


const GALLERY_API_URL = "/api/gallery/";

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
        internalPicture:"",
        description: "",
      }
    };

    this.setNewItemText = this.setNewItemText.bind(this);
    this.setExistingItemText = this.setExistingItemText.bind(this);
    this.setNewItemPicture = this.setNewItemPicture.bind(this);
    this.setNewItemExternalPicture = this.setNewItemExternalPicture.bind(this);
    this.setNewItemInternalPicture = this.setNewItemInternalPicture.bind(this);
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
        setNewItemInternalPicture={this.setNewItemInternalPicture}
        saveNewItem={this.saveNewItem}
        removeItem={this.removeItem}
        updateItem={this.updateItem}
        availablePictures={AVAILABLE_PICTURES}
      />
    );
  }
    async componentDidMount() {
        this.loadItems();
    }

    loadItems() {
        fetch(GALLERY_API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({items: data});
            })
            .catch(err => console.error("[GalleryContainer] Error when fetching gallery API:", err));
    }

    setNewItemText(newValue) {
        console.log("GalleryContainer::setNewItemText", newValue);

        const {formItem} = this.state;

        const newFormItem = {
            ...formItem,
            description: newValue
        };

        this.setState({
            formItem: newFormItem
        });
    }

    setExistingItemText(itemId, newValue) {
        console.log("GalleryContainer::setExistingItemText", itemId, newValue);

        this._updateItemProperties(itemId, {description: newValue});
    }

    _updateItemProperties(itemId, newProperties) {
        //using https://github.com/immerjs/immer would be much more easier
        const {items} = this.state;
        const newItems = items.map((item) => {
            if (item._id !== itemId) return item; // this is not the item we care about, return unchanged
            return {
                ...item,
                ...newProperties,
            };
        });
        this.setState({items: newItems})
    }

    setNewItemPicture(newValue) {
        console.log("GalleryContainer::setNewItemPicture", newValue);

        const newFormItem = {...this.state.formItem};
        newFormItem.picture = newValue;
        this.setState({
            formItem: newFormItem
        });
    }

    setNewItemExternalPicture(newValue) {
        console.log("GalleryContainer::setNewItemExternalPicture", newValue);

        const newFormItem = {...this.state.formItem};
        newFormItem.externalPicture = newValue;
        this.setState({
            formItem: newFormItem
        });
    }

  setNewItemInternalPicture(newValue) {
    const newFormItem = {...this.state.formItem};//Shallow copy
    newFormItem.internalPicture = newValue;
    console.log("GalleryContainer::setNewItemInternalPicture", newValue);
    this.setState({
      formItem: newFormItem
    });
  }

  async saveNewItem() {
    try{
      const newItem = await this._postNewItem()
      this._addFormItemToItems(newItem);
      this._resetFormItem();
    }
    catch(err){
      console.error("saveNewItem : Error when fetching gallery API :", err);
      alert("Your item has not been recorded into the DB. Error when contacting the API : "+ err);
    }

  }

  async _postNewItem(){
    const {items} = this.state;
    const newItem = {...this.state.formItem};
    newItem.picture = newItem.internalPicture || newItem.externalPicture || newItem.picture; 
    
    try{
      console.log("GalleryContainer::saveNewItem :",newItem);
      const response = await fetch(GALLERY_API_URL,{
        method: "POST",
        body: JSON.stringify(newItem), 
        headers: {
          "Content-Type": "application/json"
          }
        });
      return await response.json(); 
      }
      catch(err){
        throw new Error(err);  
      }
  }

  _addFormItemToItems(newItem) {
      const {items} = this.state;
      this.setState({
          items: [
              ...items,
              newItem,
          ]
      });
  }

  _resetFormItem() {
      const freshFormItem = {
          picture: "",
          externalPicture: "",
          description: "",
      };
      this.setState({formItem: freshFormItem});
  }

  async removeItem(item_id) {
    // retrieve the item in the state based on the id
    const {items} = this.state;
    
    const indexFound = items.findIndex(item => {
      return item._id === item_id;
    });
   
    if (indexFound < 0) {
      return;
    }   
    try{
      console.log("GalleryContainer::removeItem :",item_id);
      let response = await fetch(GALLERY_API_URL+item_id,{
        method: "delete",          
        });
      let result = await response.json();
        
      const newItems = [
          ...items.slice(0, indexFound),
          ...items.slice(indexFound + 1),
      ];

      this.setState({items: newItems});


      }
      catch(err){
        console.error("deleteItem : Error when fetching gallery API :", err);
        alert("Your item has not been deleted from the DB. Error when contacting the API : " + err);
      } 
  }

  async updateItem(item_id) {
    console.log("Make call to API for element with id:",item_id," .Update with", this.state.items[item_id]);
    // retrieve the item in the state based on the id
    const indexFound = this.state.items.findIndex(item => {
      return item._id === item_id;
    });

    if (indexFound < 0) {
      return;
    }

    try{
      const updatedItems = [
        ...this.state.items
      ]
      console.log("GalleryContainer::updateItem :",item_id);
      const response = await fetch(GALLERY_API_URL+item_id,{
        method: "PUT", 
        body: JSON.stringify( updatedItems[indexFound]), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }         
        });
      const result = await response.json();   
      }
      catch(err){
        console.error("updateItem : Error when fetching gallery API :", err);
        alert("Your item has not been updated in the DB. Error when contacting the API : "+ err);
      }     
    
  }
}

export default GalleryContainer;
