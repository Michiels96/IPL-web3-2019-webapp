import React from "react";
import { Col, Image } from "react-bootstrap";

function NullPicture() {
  return (
    <Col md={4} className="m-2">
      <Image fluid src="./notFound.jpg" alt="Loading" />
    </Col>
  );
}
export default NullPicture;
