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
        padding: "50px",
      }}
    >
      <div className="container">
        <h1
          className="text-center mb-5"
          style={{
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          Wishlist ❤️
        </h1>

        <div className="row">
          {wishlist.map((product) => (
            <div className="col-md-3 mb-4" key={product._id}>
              <div
                className="card border-0"
                style={{
                  background: "rgba(0,0,0,0.75)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-light">
                  <h4>{product.name}</h4>

                  <p
                    style={{
                      color: "#0dcaf0",
                    }}
                  >
                    {product.category}
                  </p>

                  <h5>₹ {product.price}</h5>

                  <button
                    className="btn btn-info w-100 mt-2"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => removeFromWishlist(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {wishlist.length === 0 && (
          <div className="text-center mt-5">
            <h3>Your wishlist is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
