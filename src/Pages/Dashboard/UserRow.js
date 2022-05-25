import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Cannot make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{user.email}</td>
      <td>
        {user.role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs btn-primary">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs btn-primary">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
