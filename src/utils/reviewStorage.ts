export const getReviews = (
  productId: number,
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
  productId: number,
  reviews: any[]
) => {
  localStorage.setItem(
    `reviews-${productId}`,
    JSON.stringify(reviews)
  );
};