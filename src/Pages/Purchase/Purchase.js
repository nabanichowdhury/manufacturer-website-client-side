import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SnippetButton from "../SnippetButton/SnippetButton";

const Purchase = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/part/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-3xl font-bold">{item[0]?.name}</h1>
            <img className="w-96" src={item[0]?.img} alt="" />
            <p class="py-6">{item[0]?.des}</p>
            <p>Available Items:{item[0]?.availableQuantity}</p>
            <p>MinimumOrder:{item[0]?.minimumOrder}</p>
            <SnippetButton minimumOrder={item[0]?.minimumOrder}></SnippetButton>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  value={user.email}
                  disabled
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  disabled
                  placeholder="Name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Final</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      s
    </div>
  );
};

export default Purchase;
