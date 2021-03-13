import React from "react";
import { Container, Row, Col, Image, Nav, Form, Button } from "react-bootstrap";

function FooterIntro() {
  return (
    <div className="footer_wrapper">
      <Row className="footer_back">
        <Col xs={12} md={4} className="footer_pallet">
          <Nav>
            <Nav.Item>
              <h4>FAQs</h4>
              <Nav.Link href="#">
                How do I publish files? Q: What other details are you looking
              </Nav.Link>
              <Nav.Link href="#">
                How do I publish files? Q: What other details are you looking
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} md={4} className="footer_pallet">
          <Nav>
            <Nav.Item>
              <h4>Quick Links</h4>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Questions</Nav.Link>
              <Nav.Link href="#">Stats</Nav.Link>
              <Nav.Link href="#">Challenges</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} md={4} className="footer_pallet">
          <h4>Sign Up E-Letter</h4>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="name" placeholder="Your Name " />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default FooterIntro;
