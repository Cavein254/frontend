import React from "react";
import { FaSignInAlt, FaBook, FaSearch } from "react-icons/fa";
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
              Search
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroup" placeholder="search" />
            </InputGroup>
          </Nav>
          <Button variant="outline-info" className="login_btn">
            <FaBook />
            Register
          </Button>

          <Button variant="outline-dark">
            <FaSignInAlt />
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;
