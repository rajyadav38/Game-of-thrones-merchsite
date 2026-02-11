import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have questions about our Game of Thrones merchandise? Reach out to us!
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <label className="form-label text-light">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-warning w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-info text-center mt-3">
        <h4 className="reach" style={{ color: "#3088ae" }}>
          Or reach us directly:
        </h4>
        <p className="email" style={{ color: "#3088ae" }}>
          {" "}
          ✉️ support@gotmerch.com
        </p>
        <p className="phone" style={{ color: "#3088ae" }}>
          {" "}
          📞 8318342234
        </p>
        <p className="location" style={{ color: "#3088ae" }}>
          🏠 Kings Landing Westeros
        </p>
      </div>
    </>
  );
}

export default Contact;
