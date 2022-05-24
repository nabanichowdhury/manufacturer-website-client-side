import React, { useState } from "react";

const SnippetButton = ({
  minimumOrder,
  available,
  order,
  setOrder,
  setAvailable,
}) => {
  //   const [minimumOrder] = minimumOrder;

  const condition1 =
    order > parseInt(minimumOrder) && order <= parseInt(available);
  const condition2 =
    order >= parseInt(minimumOrder) && order <= parseInt(available);
  const handleDecrement = (order) => {
    if (condition1) {
      setOrder(order - 1);
    } else {
      setOrder(parseInt(minimumOrder));
    }
  };
  const handleIncrement = (order) => {
    if (condition2) {
      setOrder(order + 1);
    } else {
      setOrder(parseInt(minimumOrder));
    }
  };

  return (
    <div>
      <button className="btn btn-circle" onClick={() => handleDecrement(order)}>
        -
      </button>
      <span> {order}</span>
      <button className="btn btn-circle" onClick={() => handleIncrement(order)}>
        +
      </button>
    </div>
  );
};

export default SnippetButton;
