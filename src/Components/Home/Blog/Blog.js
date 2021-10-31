import React from "react";
import user from "../../../images/user.jpg";
import user2 from "../../../images/user3.jpg";
import user3 from "../../../images/user2.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="mt-5">
      <Container>
        <h2 className="my-5 fw-light text-uppercase text_custom border-bottom text-center">
          OUR RECENT POSTS
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card className="shadow">
              <Card.Img variant="top" className="img-fluid" src={user} />
              <Card.Body>
                <Card.Title>
                  Life is a beautiful journey not a destination
                </Card.Title>
                <div className="d-flex">
                  <small className="border-right border-muted text-dark">
                    Demoteam
                  </small>
                  <small className="border-right border-muted text-dark">
                    August 17, 2021
                  </small>
                  <small className="border-right border-muted text-dark">
                    No comments
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow">
              <Card.Img variant="top" className="img-fluid" src={user2} />
              <Card.Body>
                <Card.Title>
                  Take only memories, leave only footprints
                </Card.Title>
                <div className="d-flex">
                  <small className="border-right border-muted text-dark">
                    Demoteam
                  </small>
                  <small className="border-right border-muted text-dark">
                    August 17, 2021
                  </small>
                  <small className="border-right border-muted text-dark">
                    No comments
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow">
              <Card.Img variant="top" className="img-fluid" src={user3} />
              <Card.Body>
                <Card.Title>
                  Journeys are best measured in new friends
                </Card.Title>
                <div className="d-flex">
                  <small className="border-right border-muted text-dark">
                    Demoteam
                  </small>
                  <small className="border-right border-muted text-dark">
                    August 17, 2021
                  </small>
                  <small className="border-right border-muted text-dark">
                    No comments
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
