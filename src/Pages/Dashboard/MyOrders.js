import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/purchase?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 401 || res.status === 403) {
            navigate("/");
          }

          return res.json();
        })
        .then((data) => setOrder(data));
    }
  }, [user, navigate]);
  return (
    <div>
      <h1>My Orders:{orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Tools</th>
              <th>Amount</th>
              <th>Available item</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.user}</td>
                <td>{order.productName}</td>
                <td>{order.minimumOrder}</td>
                <td>{order.availableItems}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
