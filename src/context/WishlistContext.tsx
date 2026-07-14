import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Product } from "../types/Product";

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (_id: string) => void;
  isInWishlist: (_id: string) => boolean;
};

const WishlistContext =
  createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem("wishlist");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (
        prev.find(
          (item) => item._id === product._id
        )
      ) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const removeFromWishlist = (_id: string) => {
    setWishlist((prev) =>
      prev.filter(
        (item) => item._id !== _id
      )
    );
  };

  const isInWishlist = (_id: string) => {
    return wishlist.some(
      (item) => item._id === _id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(
    WishlistContext
  );

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
};