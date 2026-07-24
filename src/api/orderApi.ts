import axios from "axios";


// ✅ Fixed (Works in Vite)
const API_URL = import.meta.env.VITE_API_URL || "https://api.loditojogadgets.com/api";

// Helper to get auth header
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

/**
 * Fetch a single order by its ID
 */
export const getOrderById = async (orderId: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/orders/${orderId}`,
      getAuthHeaders()
    );
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching order ${orderId}:`, error);
    throw error;
  }
};

/**
 * Create a new order
 */
export const createOrder = async (orderData: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/orders`,
      orderData,
      getAuthHeaders()
    );
    return response.data;
  } catch (error: any) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Alias for placeOrder
export const placeOrder = createOrder;

/**
 * Initialize Paystack payment for an order
 */
export const initializePayment = async (orderId: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/payments/initialize`,
      { orderId },
      getAuthHeaders()
    );
    return response.data;
  } catch (error: any) {
    console.error(`Error initializing payment for order ${orderId}:`, error);
    throw error;
  }
};

/**
 * Verify Paystack payment (Required by PaymentVerify.tsx)
 */
export const verifyPayment = async (reference: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/payments/verify/${reference}`,
      getAuthHeaders()
    );
    return response.data;
  } catch (error: any) {
    console.error(`Error verifying payment reference ${reference}:`, error);
    throw error;
  }
};

/**
 * Get all orders for the authenticated user
 */
export const getUserOrders = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/orders/my-orders`,
      getAuthHeaders()
    );
    return response.data;
  } catch (error: any) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
};

/**
 * Cancel an order by ID
 */
export const cancelOrder = async (orderId: string) => {
  try {
    const response = await axios.patch(
      `${API_URL}/orders/${orderId}/cancel`,
      {},
      getAuthHeaders()
    );
    return response.data;
  } catch (error: any) {
    console.error(`Error cancelling order ${orderId}:`, error);
    throw error;
  }
};