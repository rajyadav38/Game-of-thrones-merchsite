import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0,
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        color: "white",
        padding: window.innerWidth < 768 ? "20px" : "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: window.innerWidth < 768 ? "42px" : "60px",
            fontWeight: "bold",
            marginBottom: "40px",
            textAlign: window.innerWidth < 768 ? "center" : "left",
          }}
        >
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <h2>Your cart is empty</h2>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(0,0,0,0.75)",
                  padding: window.innerWidth < 768 ? "20px" : "30px",
                  borderRadius: "18px",
                  marginBottom: "25px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                }}
              >
                <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: window.innerWidth < 768 ? "100%" : "180px",
                      maxWidth: "220px",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />

                  {/* DETAILS */}
                  <div
                    style={{
                      flex: 1,
                      width: "100%",
                      textAlign: window.innerWidth < 768 ? "center" : "left",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: window.innerWidth < 768 ? "28px" : "36px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </h2>

                    <p
                      style={{
                        color: "#ccc",
                        marginBottom: "8px",
                      }}
                    >
                      {item.category}
                    </p>

                    <h4>₹ {item.price}</h4>

                    <p
                      style={{
                        color: "#0dcaf0",
                        fontWeight: "bold",
                      }}
                    >
                      Quantity: {item.quantity || 1}
                    </p>

                    {/* QUANTITY BUTTONS */}
                    <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 mt-3 flex-wrap">
                      <button
                        className="btn btn-danger"
                        onClick={() => decreaseQuantity(item.productId)}
                      >
                        -
                      </button>

                      <h5>{item.quantity}</h5>

                      <button
                        className="btn btn-success"
                        onClick={() => {
                          increaseQuantity(item.productId);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* REMOVE BUTTON */}
                  <button
                    className="btn btn-danger"
                    style={{
                      padding: "12px 20px",
                      fontSize: "16px",
                      width: window.innerWidth < 768 ? "100%" : "auto",
                    }}
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* TOTAL SECTION */}
            <div
              style={{
                background: "rgba(0,0,0,0.75)",
                padding: window.innerWidth < 768 ? "25px" : "40px",
                borderRadius: "20px",
                marginTop: "40px",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              <h2
                style={{
                  marginBottom: "25px",
                  fontWeight: "bold",
                  fontSize: window.innerWidth < 768 ? "32px" : "45px",
                }}
              >
                Total: ₹ {total}
              </h2>

              <button
                className="btn btn-info w-100"
                style={{
                  padding: "14px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                }}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
