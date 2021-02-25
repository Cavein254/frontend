import React from "react";
import { FaSignInAlt, FaBook } from "react-icons/fa";
import "./styles.css";
import {
  Navbar,
  NavDropdown,
  InputGroup,
  Form,
  FormControl,
  Nav,
  Button,
  Image,
} from "react-bootstrap";
import Logo from "./img/logo.png";

function Topbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="nav">
        <Navbar.Brand href="#home">
          <Image src={Logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Username
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Nav>
          <Button variant="outline-success">
            <FaBook />
            Search
          </Button>

          <Button variant="outline-success">
            <FaSignInAlt />
            Search
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;
