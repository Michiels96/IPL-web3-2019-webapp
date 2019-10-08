import React from "react";
import { Row,Col,Button } from "react-bootstrap";
import Picture from "../../Picture/Picture";
import Description from "../../Description/Description";

function GalleryItem({
    picture,
    description
})  {
  
    return (
        <Row className="m-2 justify-content-start border border-dark rounded-lg">
            <Picture picture={picture} /> 
            <Description description={description} />
            <Col className="col text-center">
                <Button
                id="save_item"
                variant="btn btn-outline-dark"
                className="m-2"
                disabled                
                >
                Save
                </Button>

                <Button
                    id="delete_item"
                    variant="btn btn-outline-dark"
                    className="m-2"
                    disabled                    
                >
                    Delete
                </Button>
          </Col>
        
         
        </Row>        
    )
  
}

export default GalleryItem;
