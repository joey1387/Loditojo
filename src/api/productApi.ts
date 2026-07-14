import { products } from "../data/products";

export const getProducts = async () => {
  return products;
};

export const getSingleProduct = async (id: string) => {
  return products.find((p) => p.id === id);
};

export const searchProducts = async (query: string) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};