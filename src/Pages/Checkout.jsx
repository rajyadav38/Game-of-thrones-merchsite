import React, { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0,
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/orders",

        {
          ...formData,

          userEmail: localStorage.getItem("email"),

          items: cart,

          total,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success("Order placed successfully");

      // CLEAR CART
      clearCart();

      // REDIRECT
      navigate("/orders");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        color: "white",
        padding: window.innerWidth < 768 ? "20px" : "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(0,0,0,0.75)",
          padding: window.innerWidth < 768 ? "25px" : "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* TITLE */}
        <h1
          className="mb-4"
          style={{
            fontSize: window.innerWidth < 768 ? "40px" : "55px",

            fontWeight: "bold",

            textAlign: "center",
          }}
        >
          Checkout
        </h1>

        <form onSubmit={handleOrder}>
          {/* NAME */}
          <input
            type="text"
            name="customerName"
            placeholder="Full Name"
            className="form-control mb-3"
            onChange={handleChange}
            style={{
              background: "#1f1f1f",
              color: "white",
              border: "1px solid #444",
              padding: "14px",
              borderRadius: "10px",
            }}
          />

          {/* ADDRESS */}
          <textarea
            name="address"
            placeholder="Shipping Address"
            className="form-control mb-3"
            onChange={handleChange}
            style={{
              background: "#1f1f1f",
              color: "white",
              border: "1px solid #444",
              padding: "14px",
              borderRadius: "10px",
              minHeight: "120px",
            }}
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="form-control mb-4"
            onChange={handleChange}
            style={{
              background: "#1f1f1f",
              color: "white",
              border: "1px solid #444",
              padding: "14px",
              borderRadius: "10px",
            }}
          />

          {/* TOTAL */}
          <h3
            className="mb-4"
            style={{
              fontSize: window.innerWidth < 768 ? "28px" : "38px",

              fontWeight: "bold",

              textAlign: "center",
            }}
          >
            Total: ₹ {total}
          </h3>

          {/* BUTTON */}
          <button
            className="btn btn-info w-100"
            style={{
              padding: "14px",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "12px",
            }}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
