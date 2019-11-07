import React from "react";
import { Row,Col,Button } from "react-bootstrap";
import Picture from "../../Picture/Picture";
import Description from "../../Description/Description";
import {ThemedButton} from "../../Button/ThemedButton"

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
        <Row className="m-3 justify-content-start border border-dark rounded-lg">
            <Picture picture={picture} />
            <Description
                id={id}
                description={description}
                setExistingItemText={setExistingItemText}
            />
            <Col className="col text-center">
                <ThemedButton
                    id="save_item"
                    variant="outline-dark"
                    className="m-2"
                    onClick={onSaveEvent}
                    text="Save"
                />

                <ThemedButton
                    id="delete_item"
                    variant="outline-dark"
                    className="m-2"
                    onClick={onDeleteEvent}
                    text="Delete" />

          </Col>
        </Row>
    )
}

export default GalleryItem;
