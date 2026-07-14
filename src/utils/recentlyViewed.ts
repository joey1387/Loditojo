import { Product } from "../types/Product";

export const saveRecentlyViewed = (id: string) => {
  const existing: string[] = JSON.parse(
    localStorage.getItem("recentProducts") || "[]"
  );

  const filtered = existing.filter(
    (item) => item !== id
  );

  filtered.unshift(id);

  localStorage.setItem(
    "recentProducts",
    JSON.stringify(filtered.slice(0, 8))
  );
};

export const getRecentlyViewed = (
  products: Product[]
) => {
  const ids: string[] = JSON.parse(
    localStorage.getItem("recentProducts") || "[]"
  );

  return ids
    .map((id) =>
      products.find(
        (product: any) =>
          product._id === id ||
          product.id === id
      )
    )
    .filter(Boolean) as Product[];
};