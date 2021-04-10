import React from "react";
import {
  FaSignInAlt,
  FaBook,
  FaSearch,
  FaHome,
  FaQuestionCircle,
  FaBookOpen,
  FaRegQuestionCircle,
} from "react-icons/fa";
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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./img/logo.png";

function Topbar() {
  return (
    <div>
      <Router>
        <Switch>
          <Navbar bg="light" expand="lg" className="nav">
            <Navbar.Brand>
              <div className="nav_icons">
                <Image src={Logo} className="logo" />
                <span>
                  <Route to="/" exact>
                    <FaHome className="nav_fa_icons" />
                  </Route>
                </span>
                <span>
                  <Route to="/questions" component="QuestionList">
                    <FaQuestionCircle className="nav_fa_icons" />
                  </Route>
                </span>
                <span>
                  <Route to="/blog">
                    <FaBookOpen className="nav_fa_icons" />
                  </Route>
                </span>
              </div>
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
                <Route to="/register">
                  <FaBook />
                  Register
                </Route>
              </Button>
              <Button variant="outline-dark">
                <Route to="/login">
                  <FaSignInAlt />
                  Login
                </Route>
              </Button>
              <Route>
                <Button className="post_question">
                  <FaRegQuestionCircle /> Post A Question
                </Button>
              </Route>
            </Navbar.Collapse>
          </Navbar>
        </Switch>
      </Router>
    </div>
  );
}

export default Topbar;
