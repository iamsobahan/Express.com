import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Package from "./Package/Package";

const Packages = () => {
  const [user_packages, setuser_package] = useState([]);

  useEffect(() => {
    fetch("https://grisly-dungeon-07150.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setuser_package(data));
  }, []);

  return (
    <div className="mt-5">
      <Container className="mt-5">
        <h2 className="my-5 fw-light text-uppercase text_custom border-bottom text-center">
          Our Packages
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {user_packages.map((user_package) => (
            <Package package={user_package} key={user_package._id}></Package>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;
