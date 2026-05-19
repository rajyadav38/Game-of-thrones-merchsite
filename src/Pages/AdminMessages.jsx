import React, { useEffect, useState } from "react";

import axios from "axios";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/contact",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",

        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",

        padding: window.innerWidth < 768 ? "20px" : "50px",

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

            fontSize: window.innerWidth < 768 ? "40px" : "60px",

            fontWeight: "bold",

            marginBottom: "50px",
          }}
        >
          Customer Messages
        </h1>

        {/* MESSAGES */}
        {messages.length === 0 ? (
          <h3
            style={{
              textAlign: "center",

              color: "#ccc",
            }}
          >
            No messages yet
          </h3>
        ) : (
          messages.map((message) => (
            <div
              key={message._id}
              style={{
                background: "rgba(0,0,0,0.75)",

                padding: window.innerWidth < 768 ? "20px" : "30px",

                borderRadius: "20px",

                marginBottom: "25px",

                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              <h3
                style={{
                  color: "#0dcaf0",

                  marginBottom: "15px",
                }}
              >
                {message.name}
              </h3>

              <p>
                <strong>Email:</strong> {message.email}
              </p>

              <p
                style={{
                  lineHeight: "1.8",

                  color: "#ccc",
                }}
              >
                {message.message}
              </p>

              <p
                style={{
                  marginTop: "15px",

                  color: "#888",

                  fontSize: "14px",
                }}
              >
                {new Date(message.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminMessages;
