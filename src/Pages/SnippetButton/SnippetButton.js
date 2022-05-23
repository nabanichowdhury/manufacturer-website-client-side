import React from "react";

const SnippetButton = ({ minimumOrder }) => {
  //   const [minimumOrder] = minimumOrder;
  let valueText;
  const inputValue = (event) => {
    const value = event.target.order.value;
    if (value < minimumOrder) {
      valueText = (
        <p className="text-red-500">Cannot order less than minimum order</p>
      );
    }
  };
  return (
    <div>
      <input
        type="number"
        class="input input-bordered w-full max-w-xs"
        value={minimumOrder}
        name="order"
        onChange={inputValue}
      />
    </div>
  );
};

export default SnippetButton;
