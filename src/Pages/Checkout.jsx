import React, { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/orders", {
        ...formData,

        userEmail: localStorage.getItem("email"),

        items: cart,

        total,
      });

      alert("Order placed successfully");

      // CLEAR CART
      clearCart();

      // Redirect
      navigate("/orders");
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(0,0,0,0.75)",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1 className="mb-4">Checkout</h1>

        <form onSubmit={handleOrder}>
          <input
            type="text"
            name="customerName"
            placeholder="Full Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Shipping Address"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="form-control mb-4"
            onChange={handleChange}
          />

          <h3 className="mb-4">Total: ₹ {total}</h3>

          <button className="btn btn-info w-100 py-2">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
