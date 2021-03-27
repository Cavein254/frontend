import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import Logolg from "../Content/Hero/img/hero2.png";
import "./styles.css";

const ProfileInfo = () => {
  return (
    <Container className="profile_wrapper">
      <Row>
        <Col xs={12} lg={4} md={6}>
          <Row>
            <div className="profile_welcome_wrapper">
             <div>
                 <h1>Personal Information</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ab temporibus officiis autem at aperiam exercitationem perferendis fugiat quis? Exercitationem necessitatibus tempora eius quis blanditiis aspernatur laudantium quisquam pariatur eaque.</p>
                 <Form>

                 </Form>
             </div>
            </div>
          </Row>
        </Col>
        <Col xs={12} lg={8} md={6} className="Profile_site_stats">
          <div>
              <h4>Available Messages</h4>
          </div>
          <div>
              <p>You Currently have no messages</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
