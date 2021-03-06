import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div class="w-full navbar bg-base-100 px-12">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2 text-primary font-bold text-5xl">
              DashBoard
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal text-primary">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/review"> My Reviews </Link>
                </li>
                <li>
                  <Link to="/dashboard/profile"> My Profile </Link>
                </li>
                {admin && (
                  <>
                    <li>
                      <Link to="/dashboard/users"> All Users </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/manageProducts">
                        Manage All Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/addProduct">Add a Product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/manageOrders">
                        Manage All Orders
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="p-10">
            <Outlet></Outlet>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/review"> My Reviews </Link>
            </li>
            <li>
              <Link to="/dashboard/profile"> My Profile </Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard/users"> All Users </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
