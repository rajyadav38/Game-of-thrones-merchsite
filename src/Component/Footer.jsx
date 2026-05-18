import React from "react";

function Footer() {
  return (
    <>
      <footer
        style={{
          background: "#111",
          color: "white",

          padding: window.innerWidth < 768 ? "40px 20px" : "50px 40px",

          marginTop: "60px",
        }}
      >
        <div className="container">
          <div className="row g-5">
            {/* BRAND */}
            <div
              className="col-12 col-md-4"
              style={{
                textAlign: window.innerWidth < 768 ? "center" : "left",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",

                  fontSize: window.innerWidth < 768 ? "32px" : "40px",

                  marginBottom: "20px",
                }}
              >
                Game of Thrones
              </h2>

              <p
                style={{
                  color: "#ccc",

                  lineHeight: "1.8",
                }}
              >
                Discover premium Game of Thrones merchandise, collectibles,
                Westeros apparel, dragon-inspired products, and exclusive fan
                items.
              </p>
            </div>

            {/* SOCIAL */}
            <div
              className="col-12 col-md-4"
              style={{
                textAlign: window.innerWidth < 768 ? "center" : "left",
              }}
            >
              <h4
                style={{
                  marginBottom: "20px",

                  fontWeight: "bold",
                }}
              >
                Follow Us
              </h4>

              <p
                style={{
                  color: "#ccc",

                  lineHeight: "1.8",
                }}
              >
                Stay updated with the latest products, launches, and exclusive
                Westeros collections.
              </p>

              {/* SOCIAL ICONS */}
              <div
                className="
                  d-flex
                  justify-content-center
                  justify-content-md-start
                  gap-3
                  mt-4
                "
              >
                <i
                  className="bi bi-facebook"
                  style={{
                    fontSize: "24px",

                    cursor: "pointer",
                  }}
                ></i>

                <i
                  className="bi bi-instagram"
                  style={{
                    fontSize: "24px",

                    cursor: "pointer",
                  }}
                ></i>

                <i
                  className="bi bi-twitter-x"
                  style={{
                    fontSize: "24px",

                    cursor: "pointer",
                  }}
                ></i>

                <i
                  className="bi bi-youtube"
                  style={{
                    fontSize: "24px",

                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div
            style={{
              borderTop: "1px solid #333",

              marginTop: "40px",

              paddingTop: "20px",

              textAlign: "center",

              color: "#888",

              fontSize: window.innerWidth < 768 ? "14px" : "16px",
            }}
          >
            <p className="mb-2">
              © 2025 Game of Thrones Merchandise. All rights reserved.
            </p>

            <p className="mb-2">
              Created by : <strong>Raj Yadav</strong>
            </p>

            <p className="mb-0">HBO Inspired Fan Store</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
