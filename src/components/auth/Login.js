import React from "react";
import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
