import api from "./api";

export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data.data || response.data;
};

export const getProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data.data || response.data;
};

export const getRelatedProducts = async (id: string) => {
  try {
    const response = await api.get(
      `/products/${id}/related`
    );

    return response.data.data || response.data;
  } catch (error) {
    console.error(error);

    const allProducts =
      await getAllProducts();

    const current = allProducts.find(
      (item: any) => item._id === id
    );

    if (!current) return [];

    return allProducts.filter(
      (item: any) =>
        item.category?._id ===
          current.category?._id &&
        item._id !== current._id
    );
  }
};

export const searchProducts = async (
  query: string
) => {
  const response = await api.get(
    `/products/search?q=${encodeURIComponent(query)}`
  );

  return response.data.data || response.data;
};

export const getProductsByCategory = async (
  category: string
) => {
  const response = await api.get(
    `/products/category/${category}`
  );

  return response.data.data || response.data;
};