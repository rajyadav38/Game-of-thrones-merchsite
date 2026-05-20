import React, { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",

    email: "",

    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://got-merch.onrender.com/api/contact",

        formData,
      );

      toast.success("Message sent successfully");

      setFormData({
        name: "",

        email: "",

        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <>
      <div
        className="contact-container"
        style={{
          minHeight: "100vh",

          background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",

          padding: window.innerWidth < 768 ? "20px" : "50px",

          color: "white",
        }}
      >
        <h1
          className="contact-title text-center"
          style={{
            fontSize: window.innerWidth < 768 ? "40px" : "60px",

            fontWeight: "bold",

            marginBottom: "20px",
          }}
        >
          Contact Us
        </h1>

        <p
          className="contact-subtitle text-center"
          style={{
            marginBottom: "50px",

            color: "#ccc",
          }}
        >
          Have questions about our Game of Thrones merchandise? Reach out to us!
        </p>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              style={{
                background: "rgba(0,0,0,0.75)",

                padding: window.innerWidth < 768 ? "25px" : "40px",

                borderRadius: "20px",

                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              {/* NAME */}
              <div className="mb-4">
                <label className="form-label text-light">Full Name</label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label className="form-label text-light">Email Address</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-4">
                <label className="form-label text-light">Message</label>

                <textarea
                  className="form-control"
                  rows="5"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-warning w-100"
                style={{
                  padding: "12px",

                  fontWeight: "bold",

                  borderRadius: "10px",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-info text-center mt-5">
          <h4
            style={{
              color: "#0dcaf0",
            }}
          >
            Or reach us directly:
          </h4>

          <p
            style={{
              color: "#0dcaf0",
            }}
          >
            ✉️ support@gotmerch.com
          </p>

          <p
            style={{
              color: "#0dcaf0",
            }}
          >
            📞 8318342234
          </p>

          <p
            style={{
              color: "#0dcaf0",
            }}
          >
            🏠 Kings Landing Westeros
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
