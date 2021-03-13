import React from "react";
import { Container, Row, Col, Image, Nav, Form, Button } from "react-bootstrap";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import LogoLg from "../Header/img/logolg.png";

function FooterClosure() {
  return (
    <div>
      <Row>
        <Col xs={12} md={4} className="footer_pallet footer_closure_wrapper">
          <div>
            <h1>Home</h1>
          </div>
        </Col>
        <Col xs={12} md={4} className="footer_pallet">
          <div>
            <Image src={LogoLg} className="footer_img" />
          </div>
        </Col>
        <Col xs={12} md={4} className="footer_pallet footer_closure">
          <div>
            <div>
              <span className="footer_icon">
                <FaFacebookSquare />
              </span>
              <span className="footer_icon">
                <FaTwitterSquare />
              </span>
              <span className="footer_icon">
                <FaInstagramSquare />
              </span>
              <div className="footer_closure_end">
                <span className="footer_icon">
                  <FaWhatsappSquare />{" "}
                </span>{" "}
                <h5>01756565656</h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FooterClosure;
