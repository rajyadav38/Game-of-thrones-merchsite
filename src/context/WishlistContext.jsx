import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const userEmail = localStorage.getItem("email");

  // LOAD USER WISHLIST
  const [wishlist, setWishlist] = useState(() => {
    if (!userEmail) return [];

    const savedWishlist = localStorage.getItem(`wishlist_${userEmail}`);

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // SAVE USER WISHLIST
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`wishlist_${userEmail}`, JSON.stringify(wishlist));
    }
  }, [wishlist, userEmail]);

  // ADD TO WISHLIST
  const addToWishlist = (product) => {
    const alreadyExists = wishlist.find((item) => item._id === product._id);

    if (alreadyExists) {
      alert("Already in wishlist");

      return;
    }

    const updatedWishlist = [...wishlist, product];

    setWishlist(updatedWishlist);

    localStorage.setItem(
      `wishlist_${userEmail}`,
      JSON.stringify(updatedWishlist),
    );

    alert(`${product.name} added to wishlist`);
  };

  // REMOVE FROM WISHLIST
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);

    setWishlist(updatedWishlist);

    localStorage.setItem(
      `wishlist_${userEmail}`,
      JSON.stringify(updatedWishlist),
    );
  };

  // CLEAR WISHLIST
  const clearWishlist = () => {
    setWishlist([]);

    localStorage.removeItem(`wishlist_${userEmail}`);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
