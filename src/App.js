import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Common/Footer";
import { Toaster } from "react-hot-toast";
import Purchase from "./Components/Purchase/Purchase";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyOrders from "./Components/Dashboard/MyOrders";
import AllOrders from "./Components/Dashboard/AllOrders";
function App() {

  return (
    <div>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<Purchase />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders />}></Route>
          <Route path="all-orders" element={<AllOrders />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
