import React from "react";
import "./Order.css";

const Order = (props) => {
  // order displayed as a table and getting data throu props

  const { _id, name, pack, add, status, dateTime } = props.order;

  return (
    <tbody>
      <tr>
        <td>{pack}</td>
        <td>{dateTime}</td>
        <td>{name}</td>
        <td>{add}</td>
        <td>
          <button onClick={() => props.func(_id)} className="btn btn-danger">
            Cancel
          </button>
        </td>
        <td>
          <button
            className={`btn ${
              status === "approved" ? "btn-success" : "btn-pending"
            } text-light`}
          >
            {status}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Order;
