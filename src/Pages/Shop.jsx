import React, { useEffect, useState } from "react";
import axios from "axios";

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

                  <button className="btn btn-warning">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}

          {/* Existing static cards kept */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://images-cdn.ubuy.co.in/65e27bbfe93e361a6519d7d5-the-noble-collection-nn0071-collectible.jpg"
                className="card-img-top"
                alt="Iron Throne Replica"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">Iron Throne Replica</h5>
                <p className="card-text">$299</p>
                <button className="btn btn-warning">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://m.media-amazon.com/images/I/41CootGoQkL._UY1100_.jpg"
                className="card-img-top"
                alt="House Stark T-Shirt"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">House Stark T-Shirt</h5>
                <p className="card-text">$29</p>
                <button className="btn btn-warning">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR459ET89nwXg_S9eaBWh38eAejUmni-CxKzBqy6e3HX6C0one1wQq6RpkQXYwZeQPHgFs&usqp=CAU"
                className="card-img-top"
                alt="Dragon Egg Collector’s Set"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">Dragon Egg Collector’s Set</h5>
                <p className="card-text">$199</p>
                <button className="btn btn-warning">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://m.media-amazon.com/images/I/5137OAG+7BL._UF1000,1000_QL80_.jpg"
                className="card-img-top"
                alt="Winter is Coming Mug"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">Winter is Coming Mug</h5>
                <p className="card-text">$15</p>
                <button className="btn btn-warning">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
