import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const makeAdmin = () => {
    fetch(`https://polar-ocean-58245.herokuapp.com/user/admin/${user.email}`, {
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
        if (data.modifiedCount) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };
  const handleDelete = (email) => {
    fetch(`https://polar-ocean-58245.herokuapp.com/user/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleteCount) {
          toast.success(`user:${user.displayName} deleted`);
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
        <button
          onClick={() => handleDelete(user.email)}
          class="btn btn-xs btn-primary"
        >
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
