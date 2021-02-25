import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaBug, FaFileCode } from "react-icons/fa";
import "./styles.css";

function Subsection() {
  return (
    <Container fluid className="subheading">
      <Row>
        <Col>
          <h1 className="text-center">Why PlanMarketplace.com?</h1>
          <p className="text-center">
            We are architects and engineers ourselves, so we created
            PlanMarketplace to be tailored to the needs of fellow architects and
            engineers. We’re not the average plan and file hosting site –
            PlanMarketplace is the first of its kind to offer a categorization
            and filtering system that makes it easy to find top quality plans,
            details and files quickly and easily.{" "}
          </p>
          <p className="text-center">
            Since PlanMarketplace makes it easy for buyers to find and purchase
            the perfect plans, it’s the most effective place to sell designs and
            files. We also go above and beyond to showcase and promote sellers
            and designs, increasing their popularity and sales revenue.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div>
            <h1 className="text-center">
              <FaBug className="faicon_bug" />
              Buy Plans
            </h1>
          </div>
          <p className="text-center">
            With PlanMarketplace, you’re not only guaranteed top-quality plans
            and files, you’re also guaranteed a search process and site
            experience that is fast, effective, and simple. Start searching now!
          </p>
          <div className="action_btn">
            <Button className="btn-lg" variant="warning">
              Find Plans
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="text-center">
            <FaFileCode className="faicon_code" />
            Sell Plans Plan
          </h1>
          <p className="text-center">
            Marketplace is the most effective platform for selling architectural
            and engineering plans and assets. We have the industry expertise and
            financial investment to attract buyers to PlanMarketplace.
          </p>
          <div className="action_btn">
            <Button className="btn-lg" variant="warning">
              Become A Seller
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Subsection;
