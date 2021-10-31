import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

import Order from "./Order/Order";

const Orders = () => {
  const [orders, setorders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://grisly-dungeon-07150.herokuapp.com/packages/orders")
      .then((res) => res.json())
      .then((data) => {
        const filTer = data.filter((order) => order.email === user.email);
        setorders(filTer);
      });
  }, []);

  const clickhandler = (id) => {
    const proceed = window.confirm("are you going to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/packages/${id}`, {
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
      <h3 className="border-bottom mb-4 text-uppercase text-start fw-bold">
        Orders :{" "}
      </h3>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Package id</th>
            <th>Package Name</th>
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
