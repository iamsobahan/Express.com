import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Manageorder from "./Manageorder/Manageorder";
import "./Manageorders.css";

const Manageorders = () => {
  const [users, setuser] = useState([]);

  const { isloading } = useAuth();

  // collect all users order

  useEffect(() => {
    fetch("https://grisly-dungeon-07150.herokuapp.com/packages/order")
      .then((res) => res.json())
      .then((data) => {
        const filterItem = data.map((item, index) => {
          item.serial = index + 1;
          return item;
        });
        setuser(filterItem);
      });
  }, []);

  // deleting order clickhandler

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
            const remaining = users.filter((order) => order._id !== id);
            setuser(remaining);
          }
        });
    }
  };

  // loader

  if (isloading) {
    return (
      <Spinner
        className="d-flex justify-content-center align-items-center my-5 mx-auto"
        animation="border"
      />
    );
  }

  return (
    <div className="container text-center my-5 anime_mother">
      {users.length ? (
        <i className="far fa-hand-point-down anime"></i>
      ) : (
        <i class="fas fa-user-secret secret"></i>
      )}
      <h3 className="pb-2 mb-5 text-start text-uppercase border-bottom">
        Manage all orders
      </h3>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Status</th>
          </tr>
        </thead>
        {users.map((totalUser) => (
          <Manageorder
            key={totalUser._id}
            totalUser={totalUser}
            myFunc={clickhandler}
          ></Manageorder>
        ))}
      </Table>
    </div>
  );
};

export default Manageorders;
