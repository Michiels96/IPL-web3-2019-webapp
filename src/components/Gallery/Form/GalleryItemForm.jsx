import React from "react";
import { Row,Col,Form, Tabs,Tab } from "react-bootstrap";
import LoadPicture from "../../Picture/LoadPicture";
import {ThemedButton} from '../../Button/ThemedButton'

function GalleryItemForm({
  formItem,
  formItem: { picture, externalPicture, description },
  setNewItemText,
  setNewItemPicture,
  setNewItemExternalPicture,
  setNewItemInternalPicture,
  saveNewItem,
  availablePictures,
}) {
  const onDescriptionChangeEvent = e => setNewItemText(e.target.value);
  const onExternalPictureChangeEvent = e => setNewItemExternalPicture(e.target.value);
  const onPictureChangeEvent = e => setNewItemPicture(e.target.value);
  const onSubmitEvent = e => {
    e.preventDefault();
    console.log("current value", formItem);    
    saveNewItem();
  };

  return (
    <Row>
      <Col className="mx-3">
      
        <Form onSubmit={onSubmitEvent}>
          <Tabs id="uncontrolled-tab-example" defaultActiveKey="availablePictures">
            <Tab eventKey="availablePictures" title="Available pictures">
              <Form.Group controlId="picture">               
                <Form.Control
                  value={picture}
                  as="select"
                  onChange={onPictureChangeEvent}
                >
                  {availablePictures.map(picture => {
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
            <Tab eventKey="internalPicture" title="Internal picture">
                <Form.Group controlId="internalPicture">
                    <LoadPicture setNewItemInternalPicture={setNewItemInternalPicture} />           </Form.Group>
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
          {/* Consume ThemeContext */}
          <ThemedButton variant="outline-dark" type="submit" onSubmit={onSubmitEvent} text="Save" />
    
        </Form>
      </Col>
  </Row>
    
  );
}

export default GalleryItemForm;
