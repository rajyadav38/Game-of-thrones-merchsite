import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");

      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="shop-container">
        <h1 className="shop-title">Shop Game of Thrones Merchandise</h1>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product._id}>
              <div className="card h-100 shadow-lg border-dark">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-center bg-dark text-light">
                  <h5 className="card-title">{product.name}</h5>

                  <p className="card-text">₹ {product.price}</p>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#ccc",
                    }}
                  >
                    {product.category}
                  </p>

                  <button
                    className="btn btn-warning"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
