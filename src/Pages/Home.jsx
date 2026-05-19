import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");

      // SHOW ONLY FIRST 3 PRODUCTS
      setProducts(response.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
        <h1>Welcome to the Game of Thrones Merchandise Store</h1>

        <p>Explore exclusive GoT-themed collectibles, clothing, and more!</p>

        <Link to="/shop" className="btn">
          Shop Now
        </Link>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <div className="container">
          <h2
            style={{
              textAlign: "center",

              marginBottom: "40px",

              fontWeight: "bold",
            }}
          >
            Featured Products
          </h2>

          <div className="row justify-content-center g-4">
            {products.map((product) => (
              <div className="col-12 col-sm-6 col-md-4" key={product._id}>
                <div
                  style={{
                    background: "rgba(0,0,0,0.75)",

                    borderRadius: "20px",

                    overflow: "hidden",

                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",

                    height: "100%",
                  }}
                >
                  {/* IMAGE */}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",

                      height: "300px",

                      objectFit: "cover",
                    }}
                  />

                  {/* BODY */}
                  <div
                    style={{
                      padding: "20px",

                      color: "white",
                    }}
                  >
                    {/* NAME */}
                    <h3
                      style={{
                        fontWeight: "bold",

                        marginBottom: "10px",
                      }}
                    >
                      {product.name}
                    </h3>

                    {/* CATEGORY */}
                    <p
                      style={{
                        color: "#0dcaf0",

                        marginBottom: "10px",
                      }}
                    >
                      {product.category}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                      style={{
                        color: "#ccc",

                        lineHeight: "1.7",

                        marginBottom: "20px",
                      }}
                    >
                      {product.description.slice(0, 100)}
                      ...
                    </p>

                    {/* PRICE */}
                    <h4
                      style={{
                        fontWeight: "bold",

                        marginBottom: "20px",
                      }}
                    >
                      ₹ {product.price}
                    </h4>

                    {/* BUTTON */}
                    <Link
                      to={`/product/${product._id}`}
                      className="btn btn-info w-100"
                      style={{
                        padding: "12px",

                        fontWeight: "bold",

                        borderRadius: "10px",
                      }}
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
