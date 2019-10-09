import React from "react";
import { Form, Button } from "react-bootstrap";

const AVAILABLE_PICTURES = [
    "welcome-heart.jpg",
    "welcome-keep-calm.jpg",
    "welcome-sky.jpg",
    "welcome-team.jpg",
]

function GalleryItemForm({
    formItem,
    formItem: {
        picture,
        description,
    },
    setNewItemText,
    setNewItemPicture,
    saveNewItem,
})  {

    const onDescriptionChangeEvent = (e) => setNewItemText(e.target.value);
    const onPictureChangeEvent = (e) => setNewItemPicture(e.target.value) ;//console.log(e);
    const onSubmitEvent = (e) => {
        e.preventDefault();
        console.log("current value", formItem);
        saveNewItem(formItem);
    }
  
    return (
        <Form onSubmit={onSubmitEvent}>
            <Form.Group controlId="picture" >
                <Form.Label>Picture</Form.Label>
                <Form.Control 
                    value={picture}
                    as="select" 
                    onChange={onPictureChangeEvent}
                >
                    { AVAILABLE_PICTURES.map(picture => {
                        return (
                            <option 
                                key={picture}
                                value={picture}
                            >
                                {picture}
                            </option> 
                        )
                    }) }
                </Form.Control>
                <Form.Text className="text-muted">
                    Please choose one of the pictures
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    value={description}
                    as="textarea" 
                    rows="3" 
                    onChange={onDescriptionChangeEvent}
                />
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit={onSubmitEvent}>
                Save
            </Button>
        </Form>
    )
  
}

export default GalleryItemForm;
