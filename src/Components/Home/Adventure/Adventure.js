import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tools from "../../../images/tools.png";
import tools2 from "../../../images/tools2.png";
import tools3 from "../../../images/tools3.png";
import tools4 from "../../../images/tools4.png";
import tools5 from "../../../images/tools5.png";
import tools6 from "../../../images/tools6.png";

const Adventure = () => {
  return (
    <div className="mt-5">
      <Container>
        <h2 className="mt-5 fw-bold text-uppercase text_custom border-bottom text-center">
          ADVENTURE & ACTIVITY
        </h2>
        <p className="text-center mb-5 w-75 mx-auto">
          Mollit voluptatem perspiciatis convallis elementum corporis quo
          veritatis aliquid blandit, blandit torquent, odit placeat.
        </p>
        <Row xs={2} md={4} lg={6} className="g-2">
          <Col>
            <div className="border text-center py-2 px-3">
              <img className="img-fluid" src={tools} alt="" />
              <h3>Adventure</h3>
              <p>15 Destination</p>
            </div>
          </Col>
          <Col>
            <div className="border text-center py-2 px-3">
              <img className="img-fluid" src={tools2} alt="" />
              <h3>Trekking</h3>
              <p>12 Destination</p>
            </div>
          </Col>
          <Col>
            <div className="border text-center py-2 px-3">
              <img className="img-fluid" src={tools3} alt="" />
              <h3>Off Road</h3>
              <p>15 Destination</p>
            </div>
          </Col>
          <Col>
            <div className="border text-center py-2 px-3">
              <img className="img-fluid" src={tools4} alt="" />
              <h3>Cam Fire</h3>
              <p>10 Destination</p>
            </div>
          </Col>
          <Col>
            <div className="border text-center py-2 px-3">
              <img className="img-fluid" src={tools5} alt="" />
              <h3>Camping</h3>
              <p>55 Destination</p>
            </div>
          </Col>
          <Col>
            <div className="border text-center py-2 px-3">
              <img className="img-fluid" src={tools6} alt="" />
              <h3>Exploring</h3>
              <p>13 Destination</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Adventure;
