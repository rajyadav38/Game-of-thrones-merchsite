import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const email = localStorage.getItem("email");

  // FETCH WISHLIST
  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      if (!email) return;

      const response = await axios.get(
        `http://localhost:5000/api/auth/wishlist/${email}`,
      );

      setWishlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD
  const addToWishlist = async (product) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/wishlist/add",
        {
          email,
          product,
        },
      );

      setWishlist(response.data);

      alert(`${product.name} added to wishlist`);
    } catch (error) {
      console.log(error);
    }
  };

  // REMOVE
  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/wishlist/remove",
        {
          email,
          productId: id,
        },
      );

      setWishlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        fetchWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
