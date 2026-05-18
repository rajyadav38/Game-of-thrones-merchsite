import React, { useContext } from "react";

import { WishlistContext } from "../context/WishlistContext";

import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        color: "white",
        padding: window.innerWidth < 768 ? "20px" : "50px",
      }}
    >
      <div className="container">
        {/* TITLE */}
        <h1
          className="text-center mb-5"
          style={{
            fontSize: window.innerWidth < 768 ? "42px" : "60px",

            fontWeight: "bold",
          }}
        >
          Wishlist ❤️
        </h1>

        {/* PRODUCTS */}
        <div className="row g-4">
          {wishlist.map((product) => (
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
                }}
              >
                {/* IMAGE */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",

                    height: window.innerWidth < 768 ? "240px" : "300px",

                    objectFit: "cover",
                  }}
                />

                {/* BODY */}
                <div className="card-body text-light d-flex flex-column">
                  {/* NAME */}
                  <h4
                    style={{
                      fontWeight: "bold",

                      fontSize: window.innerWidth < 768 ? "22px" : "26px",
                    }}
                  >
                    {product.name}
                  </h4>

                  {/* CATEGORY */}
                  <p
                    style={{
                      color: "#0dcaf0",
                    }}
                  >
                    {product.category}
                  </p>

                  {/* PRICE */}
                  <h5
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    ₹ {product.price}
                  </h5>

                  {/* BUTTONS */}
                  <div className="d-flex flex-column gap-2 mt-3 mt-auto">
                    <button
                      className="btn btn-info"
                      style={{
                        padding: "12px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>

                    <button
                      className="btn btn-danger"
                      style={{
                        padding: "12px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                      onClick={() => removeFromWishlist(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY WISHLIST */}
        {wishlist.length === 0 && (
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <h2
              style={{
                fontSize: window.innerWidth < 768 ? "32px" : "50px",
              }}
            >
              Your wishlist is empty
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
