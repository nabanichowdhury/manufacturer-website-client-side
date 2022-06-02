import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deleting, setDeleting] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/parts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl">Manage Products:{products.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {products.map((product, index) => (
              <ProductRow
                product={product}
                key={product._id}
                index={index}
                refetch={refetch}
                setDeleting={setDeleting}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && (
        <DeleteConfirmModal
          deleting={deleting}
          refetch={refetch}
          setDeleting={setDeleting}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
