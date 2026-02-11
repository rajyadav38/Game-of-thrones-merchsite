import React from "react";

function Home() {
  return (
    <div>
      <section className="hero d-flex flex-column align-items-center justify-content-center text-center">
        <h1>Welcome to the Game of Thrones Merchandise Store</h1>
        <p>Explore exclusive GoT-themed collectibles, clothing, and more!</p>
        <a href="#shop" className="btn">
          Shop Now
        </a>
      </section>

      {/* Featured Products Section */}
      <section className="featured">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="row justify-content-center product-grid">
            <div className="col-md-3 col-sm-6 product-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWe6oLA-urtJJt-CFLHJzu-5vsb1BDjyNmg&s"
                alt="Books"
                className="product-image"
              />
              <p>Books</p>
            </div>
            <div className="col-md-3 col-sm-6 product-item">
              <img
                src="https://m.media-amazon.com/images/I/71+YIQKGfDL.jpg"
                alt="Game"
                className="product-image"
              />
              <p>Games</p>
            </div>
            <div className="col-md-3 col-sm-6 product-item">
              <img
                src="https://m.media-amazon.com/images/I/71lziDA6eNL.jpg"
                alt="Toy"
                className="product-image"
              />
              <p>Toys</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
