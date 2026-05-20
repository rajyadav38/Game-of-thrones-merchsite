import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "https://got-merch.onrender.com/api/orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setOrders(response.data);
  };

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    await axios.put(
      `https://got-merch.onrender.com/api/orders/${id}`,

      { status },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    fetchOrders();
  };

  return (
    <div
      style={{
        minHeight: "100vh",

        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",

        padding: window.innerWidth < 768 ? "20px" : "40px",

        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",

          margin: "0 auto",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            textAlign: "center",

            marginBottom: "40px",

            fontSize: window.innerWidth < 768 ? "40px" : "55px",

            fontWeight: "bold",
          }}
        >
          Manage Orders
        </h1>

        {/* ORDERS */}
        {orders.map((order) => (
          <div
            key={order._id}
            style={{
              background: "rgba(0,0,0,0.75)",

              padding: window.innerWidth < 768 ? "20px" : "30px",

              borderRadius: "20px",

              marginBottom: "30px",

              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* CUSTOMER DETAILS */}
            <h3
              style={{
                marginBottom: "20px",

                fontWeight: "bold",

                textAlign: window.innerWidth < 768 ? "center" : "left",
              }}
            >
              {order.customerName}
            </h3>

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
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    order.status === "Delivered"
                      ? "lightgreen"
                      : order.status === "Shipped"
                        ? "#0dcaf0"
                        : "orange",

                  fontWeight: "bold",
                }}
              >
                {order.status}
              </span>
            </p>

            {/* ITEMS */}
            <h5 className="mt-4 mb-3">Ordered Items</h5>

            {order.items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",

                  flexDirection: window.innerWidth < 768 ? "column" : "row",

                  alignItems: "center",

                  gap: "15px",

                  marginBottom: "15px",

                  background: "#1f1f1f",

                  padding: "15px",

                  borderRadius: "12px",

                  textAlign: window.innerWidth < 768 ? "center" : "left",
                }}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: window.innerWidth < 768 ? "100%" : "80px",

                    maxWidth: "220px",

                    height: window.innerWidth < 768 ? "220px" : "80px",

                    objectFit: "cover",

                    borderRadius: "10px",
                  }}
                />

                {/* DETAILS */}
                <div>
                  <h6
                    style={{
                      fontSize: window.innerWidth < 768 ? "20px" : "16px",

                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </h6>

                  <p
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    ₹ {item.price}
                  </p>

                  <p
                    style={{
                      color: "#0dcaf0",
                    }}
                  >
                    Quantity: {item.quantity || 1}
                  </p>
                </div>
              </div>
            ))}

            {/* BUTTONS */}
            <div className="d-flex flex-column flex-md-row gap-2 mt-4">
              <button
                className="btn btn-warning"
                style={{
                  padding: "12px",

                  fontWeight: "bold",

                  borderRadius: "10px",

                  width: window.innerWidth < 768 ? "100%" : "auto",
                }}
                onClick={() => updateStatus(order._id, "Shipped")}
              >
                Mark Shipped
              </button>

              <button
                className="btn btn-success"
                style={{
                  padding: "12px",

                  fontWeight: "bold",

                  borderRadius: "10px",

                  width: window.innerWidth < 768 ? "100%" : "auto",
                }}
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
