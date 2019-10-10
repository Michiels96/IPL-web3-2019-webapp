import React from "react";
import { Row,Col,Button } from "react-bootstrap";
import Picture from "../../Picture/Picture";
import Description from "../../Description/Description";

function GalleryItem({
    id,
    picture,
    description,
    removeItem,
    updateItem,
    setExistingItemText,
})  {
    const onDeleteEvent = (e) => removeItem(id);
  
    const onSaveEvent = (e) => updateItem(id);
  
    return (
        <Row className="m-2 justify-content-start border border-dark rounded-lg">
            <Picture picture={picture} /> 
            <Description id={id} description={description} setExistingItemText={setExistingItemText} />
            <Col className="col text-center">
                <Button
                id="save_item"
                variant="btn btn-outline-dark"
                className="m-2"
                onClick={onSaveEvent}                
                >
                Save
                </Button>

                <Button
                    id="delete_item"
                    variant="btn btn-outline-dark"
                    className="m-2"
                    onClick={onDeleteEvent}                    
                >
                    Delete
                </Button>
          </Col>
        
         
        </Row>        
    )
  
}

export default GalleryItem;
