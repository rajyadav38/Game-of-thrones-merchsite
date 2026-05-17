import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const email = localStorage.getItem("email");

  // FETCH CART
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      if (!email) return;

      const response = await axios.get(
        `http://localhost:5000/api/auth/cart/${email}`,
      );

      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD TO CART
  const addToCart = async (product) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/cart/add",
        {
          email,
          product,
        },
      );

      setCart(response.data);

      toast.success(`${product.name} added to cart`);
    } catch (error) {
      console.log(error);
    }
  };

  // REMOVE
  const removeFromCart = async (id) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/cart/remove",
        {
          email,
          productId: id,
        },
      );

      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // CLEAR CART
  const clearCart = async () => {
    setCart([]);
  };

  const increaseQuantity = async (id) => {
    const response = await axios.put(
      "http://localhost:5000/api/auth/cart/increase",
      {
        email,
        productId: id,
      },
    );

    setCart(response.data);
  };

  const decreaseQuantity = async (id) => {
    const response = await axios.put(
      "http://localhost:5000/api/auth/cart/decrease",
      {
        email,
        productId: id,
      },
    );

    setCart(response.data);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        fetchCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
