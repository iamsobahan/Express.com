import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Manageorder from "./Manageorder/Manageorder";

const Manageorders = () => {
  const [users, setuser] = useState([]);
  // const [update, setupdate] = useState[false];
  useEffect(() => {
    fetch("https://grisly-dungeon-07150.herokuapp.com/packages/orders")
      .then((res) => res.json())
      .then((data) => {
        const filterItem = data.map((item, index) => {
          item.serial = index + 1;
          return item;
        });
        setuser(filterItem);
      });
  }, []);

  const clickhandler = (id) => {
    const proceed = window.confirm("are you going to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/packages/orders/${id}`, {
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

  return (
    <div className="container text-center my-5">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Serial</th>
            <th>PackageID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            <th>Status</th>
            <th>Update</th>
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
