import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
function Shop() {
  const [products, setProducts] = useState([]);
  const { addToWishlist } = useContext(WishlistContext);
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sortOrder, setSortOrder] = useState("");

  const { addToCart } = useContext(CartContext);

  // FETCH PRODUCTS
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // FILTER + SEARCH + SORT
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ? true : product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "low") {
        return a.price - b.price;
      }

      if (sortOrder === "high") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        padding: "50px",
        color: "white",
      }}
    >
      <div className="container">
        {/* TITLE */}
        <h1
          className="text-center mb-5"
          style={{
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          Shop Merchandise
        </h1>

        {/* SEARCH + FILTER */}
        <div className="d-flex flex-wrap gap-3 mb-5 justify-content-center">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search products..."
            className="form-control"
            style={{
              maxWidth: "300px",
              background: "#1f1f1f",
              color: "white",
              border: "1px solid #444",
              padding: "12px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* CATEGORY */}
          <select
            className="form-select"
            style={{
              maxWidth: "220px",
              background: "#1f1f1f",
              color: "white",
              border: "1px solid #444",
              padding: "12px",
            }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>

            <option value="Clothing">Clothing</option>

            <option value="Collectibles">Collectibles</option>

            <option value="Accessories">Accessories</option>

            <option value="Utensils">Utensils</option>
          </select>

          {/* SORT */}
          <select
            className="form-select"
            style={{
              maxWidth: "220px",
              background: "#1f1f1f",
              color: "white",
              border: "1px solid #444",
              padding: "12px",
            }}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By Price</option>

            <option value="low">Low to High</option>

            <option value="high">High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={product._id}
            >
              <div
                className="card border-0 h-100"
                style={{
                  background: "rgba(0,0,0,0.75)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                  transition: "0.3s ease",
                }}
              >
                {/* IMAGE */}
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      height: window.innerWidth < 768 ? "240px" : "300px",
                      objectFit: "cover",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  />
                </Link>

                {/* BODY */}
                <div
                  className="card-body text-light d-flex flex-column"
                  style={{
                    padding: "20px",
                  }}
                >
                  {/* NAME */}
                  <Link
                    to={`/product/${product._id}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <h4
                      style={{
                        fontWeight: "bold",
                        fontSize: window.innerWidth < 768 ? "22px" : "26px",
                      }}
                    >
                      {product.name}
                    </h4>
                  </Link>

                  {/* CATEGORY */}
                  <p
                    style={{
                      color: "#0dcaf0",
                      fontSize: "15px",
                    }}
                  >
                    {product.category}
                  </p>

                  {/* PRICE */}
                  <h5
                    className="mb-3"
                    style={{
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    ₹ {product.price}
                  </h5>

                  {/* BUTTONS */}
                  <div className="mt-auto">
                    <button
                      className="btn btn-outline-danger w-100 mb-2"
                      style={{
                        padding: "10px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                      onClick={() => addToWishlist(product)}
                    >
                      ❤️ Wishlist
                    </button>

                    <button
                      className="btn btn-info w-100"
                      style={{
                        padding: "10px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NO PRODUCTS */}
        {filteredProducts.length === 0 && (
          <div className="text-center mt-5">
            <h3>No products found</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
