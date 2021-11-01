import React, { useEffect, useRef, useState } from "react";
import boy from "../../images/boy.jpg";
import { Form, Row } from "react-bootstrap";
import "./Placeorder.css";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Placeorder = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [pack, setpack] = useState({});
  const packRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const addRef = useRef();
  const commentRef = useRef();
  const { location, doctorImg, cost, name } = pack;

  // unique package info collect

  useEffect(() => {
    fetch(`https://grisly-dungeon-07150.herokuapp.com/packages/${id}`)
      .then((res) => res.json())
      .then((data) => setpack(data));
  }, [id]);

  const clickhandler = (e) => {
    // data collect using useRef

    const pack = packRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;
    const comment = commentRef.current.value;
    const add = addRef.current.value;

    // current date

    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = time + " " + date;
    // user info
    const order = {
      pack,
      name,
      email,
      number,
      comment,
      add,
      status: "pending",
      dateTime,
    };

    // posting order info

    fetch("https://grisly-dungeon-07150.herokuapp.com/packages/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your order has submitted successfully");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <div className="placeorder my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <img className="img-fluid w-50" src={boy} alt="" />
          </div>
          <div className="col-lg-6">
            <Form onSubmit={clickhandler} className="border shadow-lg p-4">
              <div className="d-flex align-items-center pb-4">
                <img
                  style={{ width: "70px", height: "70px" }}
                  src={doctorImg}
                  className="me-2"
                  alt=""
                />
                <div>
                  <h4 className="text-uppercase">{location}</h4>
                  <h6 className="text-uppercase">Total Cost Will be ${cost}</h6>
                </div>
              </div>
              <Row className="mb-3">
                <div className="col-lg-12 mb-3">
                  <Form.Group controlId="formGridEmail">
                    <Form.Control
                      ref={packRef}
                      type="text"
                      readOnly
                      value={name}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6">
                  <Form.Group controlId="formGridPassword">
                    <Form.Control
                      ref={nameRef}
                      readOnly
                      type="name"
                      value={user.displayName}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6">
                  <Form.Group controlId="formGridEmail">
                    <Form.Control
                      ref={emailRef}
                      type="email"
                      readOnly
                      value={user.email}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6 mt-3">
                  <Form.Group controlId="formGridPassword">
                    <Form.Control
                      ref={numberRef}
                      type="number"
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6">
                  <Form.Group className="my-3" controlId="formGridAddress1">
                    <Form.Control ref={addRef} placeholder="1234 Main St" />
                  </Form.Group>
                </div>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    ref={commentRef}
                    as="textarea"
                    placeholder="Comment"
                    rows={3}
                  />
                </Form.Group>
                <input
                  type="submit"
                  value="place order"
                  className="btn btn-warning mt-3 fw-normal text-uppercase"
                />
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
