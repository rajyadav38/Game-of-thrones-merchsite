import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #111, #1c1f26, #2a3038)",
        color: "white",
        padding: "40px",
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
            fontSize: "60px",
            fontWeight: "bold",
            marginBottom: "40px",
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(0,0,0,0.75)",
                  padding: "20px",
                  borderRadius: "18px",
                  marginBottom: "25px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                }}
              >
                {/* Left */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "140px",
                      height: "140px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    <p
                      style={{
                        color: "#ccc",
                        marginBottom: "8px",
                      }}
                    >
                      {item.category}
                    </p>

                    <h4>₹ {item.price}</h4>
                  </div>
                </div>

                {/* Right */}
                <button
                  className="btn btn-danger"
                  style={{
                    padding: "10px 20px",
                    fontSize: "18px",
                  }}
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Section */}
            <div
              style={{
                marginTop: "40px",
                background: "rgba(0,0,0,0.75)",
                padding: "30px",
                borderRadius: "18px",
                textAlign: "right",
              }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                Total: ₹ {total}
              </h2>

              <button
                className="btn btn-info"
                style={{
                  padding: "12px 35px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
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
