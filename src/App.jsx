import React from "react";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
