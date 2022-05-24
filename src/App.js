import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Common/Footer";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./Components/Common/RequireAuth";
import Purchase from "./Components/Purchase/Purchase";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyOrders from "./Components/Dashboard/MyOrders";
import AllOrders from "./Components/Dashboard/AllOrders";
import AllUsers from "./Components/Dashboard/AllUsers";
import MyProfile from "./Components/Dashboard/MyProfile";
import RequireAdmin from "./Components/Common/RequireAdmin";
import AddReview from "./Components/Dashboard/AddReview";
import RequireUser from "./Components/Common/RequireUser";
function App() {

  return (
    <div>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/purchase/:id'
          element={<RequireAuth>
            <Purchase />
          </RequireAuth>} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/dashboard" element={<RequireAuth> <Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="all-orders" element={<AllOrders />}></Route>
          <Route path="add-review" element={<RequireUser> <AddReview /></RequireUser>}></Route>
          <Route path="all-users" element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
