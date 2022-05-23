import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginAndSignUp/Login";
import SignUp from "./Pages/LoginAndSignUp/SignUp";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyReviews from "./Pages/Dashboard/MyReviews";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="dashboard/myorders"
            element={<MyOrders></MyOrders>}
          ></Route>
          <Route
            path="dashboard/myreviews"
            element={<MyReviews></MyReviews>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;