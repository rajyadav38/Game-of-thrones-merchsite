import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    setProducts(response.data);
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/api/products/${editId}`, product);
      alert("Product updated");
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/products/add", product);
      alert("Product added");
    }

    setProduct({
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
    });

    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);

    alert("Product deleted");
    fetchProducts();
  };

  const handleEdit = (item) => {
    setProduct(item);
    setEditId(item._id);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold",
            fontSize: "48px",
          }}
        >
          Admin Dashboard
        </h1>

        {/* Form Card */}
        <div
          style={{
            background: "rgba(0,0,0,0.75)",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
            marginBottom: "40px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="form-control mb-3"
              value={product.name}
              onChange={handleChange}
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              className="form-control mb-3"
              value={product.price}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="form-control mb-3"
              value={product.image}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              className="form-control mb-3"
              value={product.category}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Description"
              className="form-control mb-3"
              value={product.description}
              onChange={handleChange}
            />

            <button className="btn btn-info w-100 py-2">
              {editId ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>

        {/* Products Section */}
        <h2
          style={{
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          All Products
        </h2>

        <div className="row">
          {products.map((item) => (
            <div className="col-md-4 mb-4" key={item._id}>
              <div
                style={{
                  background: "rgba(0,0,0,0.75)",
                  borderRadius: "15px",
                  padding: "20px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                  height: "100%",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />

                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>
                <p>{item.category}</p>

                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
