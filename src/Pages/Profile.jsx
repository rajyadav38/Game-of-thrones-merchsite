import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Profile() {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const { wishlist } = useContext(WishlistContext);

  const email = localStorage.getItem("email");

  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedIn");

    navigate("/login");

    window.location.reload();
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
          maxWidth: "1000px",

          margin: "0 auto",
        }}
      >
        {/* PROFILE CARD */}
        <div
          style={{
            background: "rgba(0,0,0,0.75)",

            borderRadius: "25px",

            padding: window.innerWidth < 768 ? "25px" : "50px",

            textAlign: "center",

            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          {/* AVATAR */}
          <div
            style={{
              width: window.innerWidth < 768 ? "100px" : "130px",

              height: window.innerWidth < 768 ? "100px" : "130px",

              borderRadius: "50%",

              background: "#0dcaf0",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              margin: "0 auto 25px",

              fontSize: window.innerWidth < 768 ? "40px" : "55px",

              fontWeight: "bold",

              color: "white",
            }}
          >
            {email?.charAt(0).toUpperCase()}
          </div>

          {/* NAME */}
          <h1
            style={{
              fontSize: window.innerWidth < 768 ? "40px" : "55px",

              fontWeight: "bold",

              marginBottom: "15px",
            }}
          >
            My Profile
          </h1>

          {/* EMAIL */}
          <p
            style={{
              color: "#0dcaf0",

              fontSize: window.innerWidth < 768 ? "18px" : "22px",

              marginBottom: "10px",
            }}
          >
            {email}
          </p>

          {/* ROLE */}
          <p
            style={{
              color: "#ccc",

              marginBottom: "40px",

              textTransform: "capitalize",
            }}
          >
            Role : {role}
          </p>

          {/* STATS */}
          <div className="row g-4">
            {/* CART */}
            <div className="col-12 col-md-4">
              <div
                style={{
                  background: "#1f1f1f",

                  padding: "25px",

                  borderRadius: "18px",
                }}
              >
                <h2
                  style={{
                    fontWeight: "bold",

                    color: "#0dcaf0",
                  }}
                >
                  {cart.length}
                </h2>

                <p
                  style={{
                    marginBottom: 0,
                  }}
                >
                  Cart Items
                </p>
              </div>
            </div>

            {/* WISHLIST */}
            <div className="col-12 col-md-4">
              <div
                style={{
                  background: "#1f1f1f",

                  padding: "25px",

                  borderRadius: "18px",
                }}
              >
                <h2
                  style={{
                    fontWeight: "bold",

                    color: "#ff4d6d",
                  }}
                >
                  {wishlist.length}
                </h2>

                <p
                  style={{
                    marginBottom: 0,
                  }}
                >
                  Wishlist Items
                </p>
              </div>
            </div>

            {/* ORDERS */}
            <div className="col-12 col-md-4">
              <div
                style={{
                  background: "#1f1f1f",

                  padding: "25px",

                  borderRadius: "18px",
                }}
              >
                <h2
                  style={{
                    fontWeight: "bold",

                    color: "#ffc107",
                  }}
                >
                  Active
                </h2>

                <p
                  style={{
                    marginBottom: 0,
                  }}
                >
                  Account Status
                </p>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-5">
            <button
              className="btn btn-info"
              style={{
                padding: "14px 25px",

                fontWeight: "bold",

                borderRadius: "12px",
              }}
              onClick={() => navigate("/orders")}
            >
              My Orders
            </button>

            <button
              className="btn btn-danger"
              style={{
                padding: "14px 25px",

                fontWeight: "bold",

                borderRadius: "12px",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
