import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from 'rich-markdown-editor'
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./styles.css";

const Editing = () => {
    const [title, setTitle] = useState()
    const [question, setQuestion] = useState()
  
  return (
    <Container className="editor_wrapper">
      <Row>
        <Col>
          <Form className="form-input">
            <Form.Group controlId="formBasicText">
                <Row className="editor_topbar">
                    <Col>Post Your Question Below</Col>
                    <Col><Button>Publish</Button></Col>
                </Row>
              <Form.Control type="text" placeholder="Question Title" value ={title} onChange={e => setTitle(e.target.value)}/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
          <Col>
            <Editor />
          </Col>
      </Row>
      <Row>
          <Col>
            <Button>Delete</Button>
            <Button>Save</Button>
          </Col>
      </Row>
    </Container>
  );
};

export default Editing;
