import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const role = localStorage.getItem("role");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("role");

    localStorage.removeItem("email");

    localStorage.removeItem("isLoggedIn");

    navigate("/");

    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3">
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png"
            alt="logo"
            style={{
              height: "40px",
              width: "160px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR CONTENT */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* CENTER LINKS */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/shop">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/categories">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE ICONS */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
            {/* HIDE FOR ADMIN */}
            {role !== "admin" && (
              <>
                {/* WISHLIST */}
                <Link
                  to="/wishlist"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                >
                  ❤️
                </Link>

                {/* CART */}
                <Link
                  to="/cart"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                >
                  🛒
                </Link>
              </>
            )}

            {/* PROFILE */}
            {isLoggedIn && (
              <div className="position-relative" style={{ cursor: "pointer" }}>
                <i
                  className="bi bi-person-fill"
                  style={{
                    color: "white",
                    fontSize: "24px",
                  }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                ></i>

                {dropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "40px",
                      background: "#1f1f1f",
                      padding: "15px",
                      borderRadius: "10px",
                      minWidth: "180px",
                      zIndex: 999,
                    }}
                  >
                    {role === "admin" ? (
                      <>
                        <p
                          style={{
                            color: "white",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginBottom: "5px",
                          }}
                          onClick={() => navigate("/admin-messages")}
                        >
                          Customer Messages
                        </p>
                        <p
                          style={{
                            color: "white",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginBottom: "5px",
                          }}
                          onClick={() => navigate("/admin")}
                        >
                          Add Product
                        </p>

                        <p
                          style={{
                            color: "white",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginBottom: "5px",
                          }}
                          onClick={() => navigate("/manage-orders")}
                        >
                          Manage Orders
                        </p>
                      </>
                    ) : (
                      <>
                        {/* PROFILE */}
                        <p
                          style={{
                            color: "white",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginBottom: "5px",
                          }}
                          onClick={() => navigate("/profile")}
                        >
                          My Profile
                        </p>

                        {/* ORDERS */}
                        <p
                          style={{
                            color: "white",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginBottom: "5px",
                          }}
                          onClick={() => navigate("/orders")}
                        >
                          Orders
                        </p>
                      </>
                    )}

                    {/* LOGOUT */}
                    <p
                      onClick={handleLogout}
                      style={{
                        color: "#0dcaf0",
                        padding: "10px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        marginBottom: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
