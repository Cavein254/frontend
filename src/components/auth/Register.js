import React from "react";
import { Form } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" placeholder="User name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Label</Form.Label>
          <Form.Control
            type="text"
            placeholder="Frontend, Designer, Backend ..etc"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
