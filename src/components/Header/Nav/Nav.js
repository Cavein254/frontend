import React from "react";
import { Col, Row } from "reactstrap";
import { Image, InputGroup, Text, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./img/logo.png";
import profile from "./img/profile.jpg";
import "./styles2.css";

function Nav() {
  return (
    <Row className="top">
      <Col className="col-2">
        <div>
          <Image src={Logo} className="logo" />
        </div>
        <span className="faicon">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </Col>
      <Col className="col-8">
        <div>
          <InputGroup className="mb-3 searchbar">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </Col>
      <Col className="leftcorner col-2">
        <div>
          <span className="notification"></span>
          <span className="profilepic">
            <Image src={profile} thumbnail className="profile_pic_main" />
          </span>
          <span className="username">Virginia Muthoni</span>
        </div>
      </Col>
    </Row>
  );
}

export default Nav;
