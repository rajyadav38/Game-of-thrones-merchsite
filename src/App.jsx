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

        <Route
          path="/categories"
          element={isLoggedIn ? <Categories /> : <Navigate to="/login" />}
        />

        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {isLoggedIn && <Footer />}
    </>
  );
}

export default App;
