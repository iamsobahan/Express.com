import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

import Order from "./Order/Order";

const Orders = () => {
  const [orders, setorders] = useState([]);
  const { user, isloading } = useAuth();

  // getting my orders
  useEffect(() => {
    fetch("https://grisly-dungeon-07150.herokuapp.com/packages/order")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filTer = data.filter((order) => order.email === user.email);
        setorders(filTer);
      });
  }, [user]);

  // spinner for fixing redirect

  if (isloading) {
    return (
      <Spinner
        className="d-flex justify-content-center align-items-center my-5 mx-auto"
        animation="border"
      />
    );
  }
  // clickhandler for deleting

  const clickhandler = (id) => {
    const proceed = window.confirm("are you going to delete?");
    if (proceed) {
      fetch(`https://grisly-dungeon-07150.herokuapp.com/packages/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("delete successfully");
            const remaining = orders.filter((order) => order._id !== id);
            setorders(remaining);
          }
        });
    }
  };
  return (
    <div className="container text-center my-5">
      <h3 className="border-bottom mb-4 pb-2 text-uppercase text-start">
        My Orders :{" "}
      </h3>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Order time</th>
            <th>Client Name</th>
            <th>Address</th>
            <th>Cancel order</th>
            <th>status</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <Order key={order._id} order={order} func={clickhandler}></Order>
        ))}
      </Table>
    </div>
  );
};

export default Orders;
