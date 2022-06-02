import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch, setDeleting }) => {
  const { name, img, price, availableQuantity, minimumOrder, _id } = product;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 mask mask-squircle">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>
        <label
          onClick={() => setDeleting(product)}
          for="my-modal-6"
          class="btn modal-button btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
