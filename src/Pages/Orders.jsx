import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  const email = localStorage.getItem("email");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:5000/api/orders");

    const userOrders = response.data.filter(
      (order) => order.userEmail === email,
    );

    setOrders(userOrders);
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
          Your Orders
        </h1>

        {orders.length === 0 ? (
          <h3>No Orders Found</h3>
        ) : (
          orders.map((order) => (
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
