import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:5000/api/orders");

    setOrders(response.data);
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/orders/${id}`, { status });

    fetchOrders();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Manage Orders
        </h1>

        {orders.map((order) => (
          <div
            key={order._id}
            style={{
              background: "rgba(0,0,0,0.75)",
              padding: "30px",
              borderRadius: "18px",
              marginBottom: "30px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          >
            <h3>{order.customerName}</h3>

            <p>
              <strong>Phone:</strong> {order.phone}
            </p>

            <p>
              <strong>Address:</strong> {order.address}
            </p>

            <p>
              <strong>Total:</strong> ₹ {order.total}
            </p>

            <p>
              <strong>Status:</strong> {order.status}
            </p>

            <h5 className="mt-4 mb-3">Ordered Items</h5>

            {order.items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "15px",
                  background: "#1f1f1f",
                  padding: "12px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div>
                  <h6>{item.name}</h6>
                  <p>₹ {item.price}</p>
                </div>
              </div>
            ))}

            {/* Status Buttons */}
            <div className="mt-4">
              <button
                className="btn btn-warning me-2"
                onClick={() => updateStatus(order._id, "Shipped")}
              >
                Mark Shipped
              </button>

              <button
                className="btn btn-success"
                onClick={() => updateStatus(order._id, "Delivered")}
              >
                Mark Delivered
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrders;
