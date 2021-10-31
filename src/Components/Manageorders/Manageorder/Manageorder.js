import React, { useState } from "react";

const Manageorder = (props) => {
  let { _id, name, email, serial, status } = props.totalUser;
  const user = {
    status: "approved",
  };
  const updatehandler = (id) => {
    fetch(`https://grisly-dungeon-07150.herokuapp.com/packages/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          alert("Package updated successfully.");
        }
      });
  };
  return (
    <tbody>
      <tr>
        <td>{serial}</td>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button
            onClick={() => props.myFunc(_id)}
            className="btn btn-danger text-white"
          >
            Remove
          </button>
        </td>
        {status === "pending" && (
          <td>
            <button className="btn btn-pending text-white">{status}</button>
          </td>
        )}
        {status === "approved" && (
          <td>
            <button className="btn btn-success">Active</button>
          </td>
        )}

        <td>
          <button
            onClick={() => updatehandler(_id)}
            className="btn btn-success text-white"
          >
            {status === "approved" ? status : "Update"}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Manageorder;
