import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./package.css";

const Package = (props) => {
  const { _id, doctorImg, name, description, cost, location, reveiws } =
    props.package;
  const history = useHistory();

  // create dynamic route handler

  const clickhandler = () => {
    history.push(`/placeorder/${_id}`);
  };

  return (
    <Col>
      <Card className="card">
        <div className="pack_mother">
          <Card.Img variant="top" src={doctorImg} className="packImg" />
          <div className="pack_overlay">
            <p>
              ${cost}
              <span className="fw-light">/per person</span>
            </p>
          </div>

          <div className="pack_bottom_overlay">
            <small>5D/4N</small>
            <small>people : 5</small>
            <small>{location}</small>
          </div>
        </div>

        <Card.Body>
          <Card.Title className="text-uppercase">{name}</Card.Title>
          <p className="text-secondary fw-light">({reveiws} reviews)</p>
          <Card.Text>{description}</Card.Text>
          <button
            onClick={clickhandler}
            className="btn btn_custom text-dark text-uppercase fw-normal"
          >
            book now <i className="fas fa-cart-plus"></i>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Package;
