import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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

    try {
      // UPDATE
      if (editId) {
        await axios.put(
          `http://localhost:5000/api/products/${editId}`,

          product,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        toast.success("Product updated");

        setEditId(null);
      } else {
        // ADD
        await axios.post(
          "http://localhost:5000/api/products/add",

          product,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        toast.success("Product added");
      }

      // CLEAR FORM
      setProduct({
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/products/${id}`,

      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    toast.success("Product deleted");

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

        padding: window.innerWidth < 768 ? "20px" : "40px",

        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",

          margin: "0 auto",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: window.innerWidth < 768 ? "40px" : "60px",

            fontWeight: "bold",

            textAlign: "center",

            marginBottom: "40px",
          }}
        >
          Admin Dashboard
        </h1>

        {/* FORM */}
        <div
          style={{
            background: "rgba(0,0,0,0.75)",

            padding: window.innerWidth < 768 ? "20px" : "35px",

            borderRadius: "20px",

            marginBottom: "50px",

            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="form-control mb-3"
              value={product.name}
              onChange={handleChange}
              style={{
                background: "#1f1f1f",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
                borderRadius: "10px",
              }}
            />

            {/* PRICE */}
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="form-control mb-3"
              value={product.price}
              onChange={handleChange}
              style={{
                background: "#1f1f1f",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
                borderRadius: "10px",
              }}
            />

            {/* IMAGE */}
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="form-control mb-3"
              value={product.image}
              onChange={handleChange}
              style={{
                background: "#1f1f1f",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
                borderRadius: "10px",
              }}
            />

            {/* CATEGORY */}
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="form-control mb-3"
              value={product.category}
              onChange={handleChange}
              style={{
                background: "#1f1f1f",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
                borderRadius: "10px",
              }}
            />

            {/* DESCRIPTION */}
            <textarea
              name="description"
              placeholder="Description"
              className="form-control mb-3"
              value={product.description}
              onChange={handleChange}
              style={{
                background: "#1f1f1f",
                color: "white",
                border: "1px solid #444",
                padding: "14px",
                borderRadius: "10px",
                minHeight: "120px",
              }}
            />

            {/* BUTTON */}
            <button
              className="btn btn-info w-100"
              style={{
                padding: "14px",

                fontSize: "18px",

                fontWeight: "bold",

                borderRadius: "12px",
              }}
            >
              {editId ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>

        {/* PRODUCTS */}
        <h2
          style={{
            marginBottom: "25px",

            fontWeight: "bold",

            textAlign: window.innerWidth < 768 ? "center" : "left",
          }}
        >
          All Products
        </h2>

        <div className="row g-4">
          {products.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item._id}>
              <div
                style={{
                  background: "rgba(0,0,0,0.75)",

                  borderRadius: "20px",

                  overflow: "hidden",

                  height: "100%",

                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                }}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",

                    height: window.innerWidth < 768 ? "240px" : "300px",

                    objectFit: "cover",
                  }}
                />

                {/* BODY */}
                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </h4>

                  <p>₹ {item.price}</p>

                  <p
                    style={{
                      color: "#0dcaf0",
                    }}
                  >
                    {item.category}
                  </p>

                  {/* BUTTONS */}
                  <div className="d-flex flex-column gap-2 mt-3">
                    <button
                      className="btn btn-warning"
                      style={{
                        padding: "12px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      style={{
                        padding: "12px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
