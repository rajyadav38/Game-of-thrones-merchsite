import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png"
              alt="Game of Thrones Logo"
              style={{ height: "50px", width: "200px" }}
            />
          </Link>

          {/* Center Navbar Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Profile Dropdown */}
          <div
            className="position-relative"
            style={{ marginLeft: "15px", cursor: "pointer" }}
          >
            <span onClick={() => setShowMenu(!showMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M14 14s-1-4-6-4-6 4-6 4 1 1 6 1 6-1 6-1z" />
              </svg>
            </span>

            {showMenu && (
              <div
                className="bg-dark text-light p-3 rounded shadow"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "35px",
                  minWidth: "180px",
                  zIndex: 1000,
                  border: "1px solid #444",
                }}
              >
                {/* Admin only options */}
                {role === "admin" && (
                  <>
                    <p
                      style={{
                        cursor: "pointer",
                        marginBottom: "10px",
                      }}
                      onClick={() => navigate("/admin")}
                    >
                      Add Product
                    </p>

                    <p
                      style={{
                        cursor: "pointer",
                        marginBottom: "10px",
                      }}
                    >
                      Manage Orders
                    </p>
                  </>
                )}

                {/* Common options */}
                <p
                  style={{
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  Orders
                </p>

                <p
                  style={{
                    cursor: "pointer",
                    color: "#0dcaf0",
                    marginBottom: 0,
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
