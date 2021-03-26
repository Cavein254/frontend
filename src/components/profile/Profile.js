import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Logolg from "../Content/Hero/img/hero2.png";
import "./styles.css";

const Profile = () => {
  return (
    <Container className="profile_wrapper">
      <Row>
        <Col xs={12} lg={4} md={6}>
          <Row>
            <div className="profile_welcome_wrapper">
              <div className="profile_welcome_1">
                <Col xs={6} md={6}>
                  <h4>Welcome Back!</h4>
                  <h4>It seems we like it simple</h4>
                </Col>
                <Col xs={6} md={6}>
                  <Image src={Logolg} className="header_image" />
                </Col>
              </div>
              <Row className="header_image_2_wrapper">
                <Col md={4}>
                  <Image src={Logolg} className="header_image_2" />
                  <p>Designer</p>
                </Col>
                <Col md={4} className="profile_stats_text">
                  <h4>125</h4>
                  <p>Questions Asked</p>
                </Col>
                <Col md={4} className="profile_stats_text">
                  <h4>124</h4>
                  <p>Question Answered</p>
                </Col>
              </Row>
              <Row>
                <Col className="profile_edit_btn">
                  <Button variant="primary">Edit Profile</Button>
                </Col>
              </Row>
            </div>
          </Row>
        </Col>
        <Col xs={12} lg={8} md={6}>
          <h1>Statistics here</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
