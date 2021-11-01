import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import addnew from "../../images/addnew.png";
import "./Addnewpack.css";

const Addnewpack = () => {
  const nameRef = useRef();
  const imgRef = useRef();
  const locationRef = useRef();
  const costRef = useRef();
  const reviewRef = useRef();
  const infoRef = useRef();

  const clickhandler = (e) => {
    const name = nameRef.current.value;
    const doctorImg = imgRef.current.value;
    const location = locationRef.current.value;
    const cost = costRef.current.value;
    const reveiws = reviewRef.current.value;
    const description = infoRef.current.value;
    const addpack = {
      name,
      doctorImg,
      location,
      cost,
      reveiws,
      description,
    };
    fetch("https://grisly-dungeon-07150.herokuapp.com/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addpack),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your package is added to homepage.");
        }
      });
    e.target.reset();

    e.preventDefault();
  };
  return (
    <div className="newpack my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={addnew} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <h3 className="text-uppercase fw-bold border-bottom py-3">
              Create custom Package
            </h3>
            <Form className="shadow-lg p-3" onSubmit={clickhandler}>
              <div className="row">
                <div className="col-lg-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      ref={nameRef}
                      type="text"
                      placeholder="Package Name"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      ref={imgRef}
                      type="text"
                      placeholder="Image Url"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-4">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      ref={locationRef}
                      type="text"
                      placeholder="Location"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-4">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      ref={costRef}
                      type="number"
                      placeholder="Cost"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-4">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      ref={reviewRef}
                      type="number"
                      placeholder="reviews"
                    />
                  </Form.Group>
                </div>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    ref={infoRef}
                    as="textarea"
                    placeholder="Description"
                    rows={3}
                  />
                </Form.Group>

                <input
                  className="btn btn_customs text-light mt-3"
                  type="submit"
                  value="Add package"
                ></input>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnewpack;
