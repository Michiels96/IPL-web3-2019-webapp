import React from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";

const LoginForm = ({
  username,
  password,
  errorMessage,
  authenticate,
  onInputChange
}) => {
  return (
    <Row>
      <Col className="m-3">
        <Form onSubmit={authenticate}>
          <Form.Group controlId="formHorizontalUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="username"
              type="username"
              placeholder="Username"
              value={username}
              onChange={onInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formHorizontalPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Button type="submit" onSubmit={authenticate}>Sign in</Button>
          </Form.Group>
        </Form>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      </Col>
    </Row>
  );
};

export default LoginForm;
