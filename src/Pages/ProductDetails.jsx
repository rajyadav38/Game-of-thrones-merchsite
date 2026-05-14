import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  const [review, setReview] = useState({
    user: "",
    comment: "",
    rating: 5,
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`,
      );

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // SUBMIT REVIEW
  const submitReview = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/products/review/${id}`,
        review,
      );

      alert("Review added successfully");

      fetchProduct();

      setReview({
        user: "",
        comment: "",
        rating: 5,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        padding: "60px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          background: "rgba(0,0,0,0.75)",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* TOP SECTION */}
        <div className="row g-0">
          {/* IMAGE */}
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* DETAILS */}
          <div
            className="col-md-6"
            style={{
              padding: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                color: "#0dcaf0",
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              {product.category}
            </p>

            <h2
              style={{
                marginBottom: "30px",
                fontWeight: "bold",
              }}
            >
              ₹ {product.price}
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.9",
                color: "#d1d1d1",
                marginBottom: "40px",
              }}
            >
              {product.description}
            </p>

            {/* ADD TO CART */}
            <button
              className="btn btn-info"
              style={{
                padding: "14px 40px",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "12px",
              }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div
          style={{
            padding: "50px",
            borderTop: "1px solid #333",
          }}
        >
          <h2
            style={{
              marginBottom: "35px",
              fontWeight: "bold",
            }}
          >
            Reviews & Ratings
          </h2>

          {/* REVIEW FORM */}
          <div
            style={{
              background: "#1a1a1a",
              padding: "30px",
              borderRadius: "20px",
              marginBottom: "50px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
              value={review.user}
              onChange={(e) =>
                setReview({
                  ...review,
                  user: e.target.value,
                })
              }
              style={{
                background: "#2a2a2a",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
              }}
            />

            <textarea
              placeholder="Write review..."
              className="form-control mb-3"
              value={review.comment}
              onChange={(e) =>
                setReview({
                  ...review,
                  comment: e.target.value,
                })
              }
              style={{
                background: "#2a2a2a",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
                minHeight: "120px",
              }}
            />
            <select
              className="form-select mb-4"
              value={review.rating}
              onChange={(e) =>
                setReview({
                  ...review,
                  rating: e.target.value,
                })
              }
              style={{
                background: "#2a2a2a",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
              }}
            >
              <option value="5">⭐⭐⭐⭐⭐</option>

              <option value="4">⭐⭐⭐⭐</option>

              <option value="3">⭐⭐⭐</option>

              <option value="2">⭐⭐</option>

              <option value="1">⭐</option>
            </select>

            <button
              className="btn btn-info"
              style={{
                padding: "12px 30px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
              onClick={submitReview}
            >
              Submit Review
            </button>
          </div>

          {/* REVIEW LIST */}
          <div>
            {product.reviews?.length === 0 && (
              <h5
                style={{
                  color: "#999",
                }}
              >
                No reviews yet
              </h5>
            )}

            {product.reviews?.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#1f1f1f",
                  padding: "25px",
                  borderRadius: "18px",
                  marginBottom: "20px",
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4>{item.user}</h4>

                  <h5>{"⭐".repeat(item.rating)}</h5>
                </div>

                <p
                  style={{
                    color: "#d1d1d1",
                    marginBottom: 0,
                    lineHeight: "1.8",
                  }}
                >
                  {item.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
