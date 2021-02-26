import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Heropic from "./img/hero2.png";
import Logolg from "./img/logolg.png";
import 
function Hero() {
  return (
    <Container fluid className="hero">
      <Row>
        <Col>
          <h1>
            T
            <span>
              <Image src={Logolg} />
              Code
            </span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Heropic} />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
