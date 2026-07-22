export const getReviews = async (
  productId: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/reviews/product/${productId}`,
    {
      credentials: "include",
    }
  );

  return await response.json();
};

export const createReview = async (
  productId: string,
  rating: number,
  comment: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/reviews`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        rating,
        comment,
      }),
    }
  );

  return await response.json();
};

export const updateReview = async (
  reviewId: string,
  rating: number,
  comment: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/reviews/${reviewId}`,
    {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        comment,
      }),
    }
  );

  return await response.json();
};

export const deleteReview = async (
  reviewId: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/reviews/${reviewId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  return await response.json();
};