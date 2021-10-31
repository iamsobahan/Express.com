import React from "react";
import "./Order.css";

const Order = (props) => {
  const { _id, name, pack, add, status } = props.order;

  return (
    <tbody>
      <tr>
        <td>{_id}</td>
        <td>{pack}</td>
        <td>{name}</td>
        <td>{add}</td>
        <td>
          <button onClick={() => props.func(_id)} className="btn btn-danger">
            Cancel
          </button>
        </td>
        <td>
          <button className="btn btn-pending text-light">{status}</button>
        </td>
      </tr>
    </tbody>
  );
};

export default Order;
