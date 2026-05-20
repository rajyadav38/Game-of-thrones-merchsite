import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
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
        `https://got-merch.onrender.com/api/auth/wishlist/${email}`,
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
        "https://got-merch.onrender.com/api/auth/wishlist/add",
        {
          email,
          product,
        },
      );

      setWishlist(response.data);

      toast.success(`${product.name} added to wishlist`);
    } catch (error) {
      console.log(error);
    }
  };

  // REMOVE
  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.put(
        "https://got-merch.onrender.com/api/auth/wishlist/remove",
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
