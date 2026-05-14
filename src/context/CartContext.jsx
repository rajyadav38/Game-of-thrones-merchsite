import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load from localStorage
  const userEmail = localStorage.getItem("email");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(`cart_${userEmail}`);

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cart));
    }
  }, [cart, userEmail]);

  // Add item
  const addToCart = (product) => {
    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem(`cart_${userEmail}`, JSON.stringify(updatedCart));

    alert(`${product.name} added to cart`);
  };

  // Remove item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);

    setCart(updatedCart);

    localStorage.setItem(`cart_${userEmail}`, JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);

    localStorage.removeItem(`cart_${userEmail}`);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
