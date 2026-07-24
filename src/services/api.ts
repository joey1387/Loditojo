import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://loditojo-7t31.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach JWT token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const reviewService = {
  getProductReviews: async (productId: string) => {
    const response = await api.get(`/reviews/product/${productId}`);
    return response.data;
  },

  createReview: async (reviewData: { productId: string; rating: number; comment: string }) => {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  },

  deleteReview: async (reviewId: string) => {
    const response = await api.delete(`/reviews/${reviewId}`);
    return response.data;
  },
};

export default api;