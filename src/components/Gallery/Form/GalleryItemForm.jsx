import React from "react";
import { Form, Button,Tabs,Tab } from "react-bootstrap";

const AVAILABLE_PICTURES = [
  "welcome-heart.jpg",
  "welcome-keep-calm.jpg",
  "welcome-sky.jpg",
  "welcome-team.jpg",
];

function GalleryItemForm({
  formItem,
  formItem: { picture, externalPicture, description },
  setNewItemText,
  setNewItemPicture,
  setNewItemExternalPicture,
  saveNewItem,
}) {
  const onDescriptionChangeEvent = e => setNewItemText(e.target.value);
  const onExternalPictureChangeEvent = e => setNewItemExternalPicture(e.target.value);
  const onPictureChangeEvent = e => setNewItemPicture(e.target.value);
  const onSubmitEvent = e => {
    e.preventDefault();
    console.log("current value", formItem);
    //ensure that the Picture is updated (in case there were no change event)
    if (formItem.picture === "") 
        setNewItemPicture(AVAILABLE_PICTURES[0]);
    saveNewItem();
  };

  return (
    <Form onSubmit={onSubmitEvent}>
      <Tabs id="uncontrolled-tab-example" defaultActiveKey="availablePictures">
        <Tab eventKey="availablePictures" title="Available pictures">
          <Form.Group controlId="picture">
            {/* <Form.Label>Picture</Form.Label> */}
            <Form.Control
              value={picture}
              as="select"
              onChange={onPictureChangeEvent}
            >
              {AVAILABLE_PICTURES.map(picture => {
                return (
                  <option key={picture} value={picture}>
                    {picture}
                  </option>
                );
              })}
            </Form.Control>
            <Form.Text className="text-muted">
              Please choose one of the pictures
            </Form.Text>
          </Form.Group>
        </Tab>
        <Tab eventKey="externalPicture" title="External picture">
            <Form.Group controlId="externalPicture">
                <Form.Control
                    value={externalPicture}
                    as="input"
                    placeholder="http://... Please type your URL."
                    onChange={onExternalPictureChangeEvent}
                />
            </Form.Group>
            </Tab>       
      </Tabs>

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
  );
}

export default GalleryItemForm;
