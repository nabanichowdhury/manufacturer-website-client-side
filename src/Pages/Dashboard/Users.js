import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  //   const [users, setUser] = useState([]);

  const {
    isLoading,
    refetch,
    data: users,
  } = useQuery("repoData", () =>
    fetch("https://polar-ocean-58245.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  //   useEffect(() => {
  //     fetch("https://polar-ocean-58245.herokuapp.com/user", {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   }, []);
  return (
    <div>
      <h2>Users:{users?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Make Admin Button</th>
              <th>Remove Button</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
