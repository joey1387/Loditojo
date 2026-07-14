import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "../types/Product";

type CompareContextType = {
  compare: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (id: number) => void;
  clearCompare: () => void;
  isInCompare: (id: number) => boolean;
};

const CompareContext =
  createContext<CompareContextType | null>(null);

export const CompareProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [compare, setCompare] = useState<Product[]>(() => {
    const saved = localStorage.getItem("compare");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "compare",
      JSON.stringify(compare)
    );
  }, [compare]);

  const addToCompare = (product: Product) => {
    setCompare((prev) => {
      if (
        prev.some(
          (item) => item.id === product.id
        )
      ) {
        return prev;
      }

      if (prev.length >= 4) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const removeFromCompare = (id: number) => {
    setCompare((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const clearCompare = () => {
    setCompare([]);
  };

  const isInCompare = (id: number) => {
    return compare.some(
      (item) => item.id === id
    );
  };

  return (
    <CompareContext.Provider
      value={{
        compare,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(
    CompareContext
  );

  if (!context) {
    throw new Error(
      "useCompare must be used inside CompareProvider"
    );
  }

  return context;
};