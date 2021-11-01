import React, { useState } from "react";

const Manageorder = (props) => {
  let { _id, name, email, serial, status } = props.totalUser;
  const [update, setupdate] = useState(status);

  // update info
  const user = {
    status: "approved",
  };

  // update status handler

  const updatehandler = (id) => {
    fetch(`https://grisly-dungeon-07150.herokuapp.com/packages/order/${id}`, {
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
          setupdate(user.status);
        }
      });
  };

  return (
    <tbody>
      <tr>
        <td>{serial}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button
            onClick={() => props.myFunc(_id)}
            className="btn btn-danger text-white"
          >
            Delete
          </button>
        </td>

        {update === "pending" ? (
          <td>
            <button
              onClick={() => updatehandler(_id)}
              className="btn btn-pending text-light"
            >
              {update}
            </button>
          </td>
        ) : (
          <td>
            <button className="btn btn-success text-light">{update}</button>
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default Manageorder;
