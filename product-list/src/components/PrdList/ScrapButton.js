import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addToWishlist = (product) => {
    setProducts((p) => [...p, product]);
  };

  const clearWishlist = () => setProducts([]);

  return (
    <WishlistContext.Provider
      value={{ products, addToWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
