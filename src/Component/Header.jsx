import React from "react";
import { Link } from "react-router-dom";

function Header() {
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

          {/* Centered Navbar Links */}
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
          <div className="d-flex align-items-center">
            <span style={{ marginLeft: "15px", cursor: "pointer" }}>
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

            <button
              className="btn btn-sm ms-3"
              style={{ padding: "6px 12px", fontSize: "14px" }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
