import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleting, refetch, setDeleting }) => {
  const { name, _id } = deleting;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/parts/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product ${name} deleted`);
          setDeleting(null);
          refetch();
        }
      });
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
          <p class="py-4">
            If you delete once you won't get your data back....
          </p>
          <div class="modal-action">
            <button onClick={() => handleDelete(_id)} class="btn  btn-error">
              Delete
            </button>
            <label for="my-modal-6" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
