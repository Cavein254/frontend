import React from "react";
import { Col, Row } from "reactstrap";
import { Image, InputGroup, Text, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Logo from "./img/logo.png";
import profile from "./img/profile.jpg";

function Nav() {
    return (
        <Row>
            <Col>
                <div>
                    <Image src={Logo} className="logo"/>
                </div>
                <span className="humberger">
                    <FontAwesomeIcon icon={faCoffee} />
                </span>
                <div className="searchbar">
                <InputGroup className="mb-3">
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
        </Row>
    )
}

export default Nav
