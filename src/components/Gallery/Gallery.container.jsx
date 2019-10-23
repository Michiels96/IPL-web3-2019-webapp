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

class GalleryContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            formItem: {
                picture: "",
                externalPicture: "",
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
        const newItems = items.map((item, index) => {
            // currently itemId is index in array
            if (index !== itemId) return item; // this is not the item we care about, return unchanged
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

    saveNewItem() {
        this._addFormItemToItems();
        this._resetFormItem();
    }

    _addFormItemToItems() {
        const {items} = this.state;
        const newItem = {...this.state.formItem};
        newItem.picture = newItem.externalPicture !== "" ? newItem.externalPicture : newItem.picture;

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

    removeItem(itemId) {
        const {items} = this.state;
        // Currently the id is directly the item index in this.state.items
        const indexFound = itemId;

        if (indexFound < 0) {
            return;
        }

        const newItems = [
            ...items.slice(0, indexFound),
            ...items.slice(indexFound + 1),
        ];

        this.setState({items: newItems});
    }

    updateItem(itemId) {
        const { items } = this.state;
        // Currently the id is directly the item index in this.state.items
        const indexFound = itemId;
        const item = items[indexFound];

        console.log("Make call to API for element with id:", itemId, " .Update with", item);
    }

}

export default GalleryContainer;
