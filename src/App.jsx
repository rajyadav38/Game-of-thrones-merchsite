import React from "react";
import Header from "./Component/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import AdminOrders from "./Pages/AdminOrders";
import Orders from "./Pages/Orders";
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import Profile from "./Pages/Profile";
import AdminMessages from "./Pages/AdminMessages";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      {isLoggedIn && <Header />}

      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/shop"
          element={isLoggedIn ? <Shop /> : <Navigate to="/login" />}
        />
        <Route path="/shop/:house" element={<Shop />} />

        <Route
          path="/categories"
          element={isLoggedIn ? <Categories /> : <Navigate to="/login" />}
        />

        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/manage-orders" element={<AdminOrders />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-messages" element={<AdminMessages />} />
      </Routes>

      {isLoggedIn && <Footer />}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </>
  );
}

export default App;
