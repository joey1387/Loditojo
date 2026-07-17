import { Review } from "../types/Product";

export const getReviews = (
  productId: string,
  defaultReviews: any[]
) => {
  const saved = localStorage.getItem(
    `reviews-${productId}`
  );

  return saved
    ? JSON.parse(saved)
    : defaultReviews;
};

export const saveReviews = (
  productId: string,
  reviews: any[]
) => {
  localStorage.setItem(
    `reviews-${productId}`,
    JSON.stringify(reviews)
  );
};