import axios from 'axios';

// Replace with your base URL / environment variable
const API_URL = 'http://YOUR_BACKEND_IP:5000/api/users'; 

// Helper for Auth Header
const getAuthHeader = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const userService = {
  // Get All Users (Admin)
  getAllUsers: async (token: string, params?: { role?: string; isSuspended?: boolean; search?: string; page?: number; limit?: number }) => {
    const response = await axios.get(`${API_URL}/all`, {
      ...getAuthHeader(token),
      params,
    });
    return response.data; // Returns: { success, page, totalPages, users }
  },

  // Get Single User (Admin)
  getSingleUser: async (token: string, id: string) => {
    const response = await axios.get(`${API_URL}/${id}`, getAuthHeader(token));
    return response.data;
  },

  // Get Pending Sellers (Admin)
  getPendingSellers: async (token: string) => {
    const response = await axios.get(`${API_URL}/pending-sellers`, getAuthHeader(token));
    return response.data; // Returns: { success, count, users }
  },

  // Approve or Reject Seller (Admin)
  handleSellerApplication: async (token: string, id: string, action: 'approve' | 'reject', reason?: string) => {
    const response = await axios.patch(`${API_URL}/handle-seller/${id}`, { action, reason }, getAuthHeader(token));
    return response.data;
  },

  // Suspend User (Admin)
  suspendUser: async (token: string, id: string, reason: string) => {
    const response = await axios.patch(`${API_URL}/suspend/${id}`, { reason }, getAuthHeader(token));
    return response.data;
  },

  // Unsuspend User (Admin)
  unsuspendUser: async (token: string, id: string) => {
    const response = await axios.patch(`${API_URL}/unsuspend/${id}`, {}, getAuthHeader(token));
    return response.data;
  },

  // Delete User (Admin / Superadmin)
  deleteUser: async (token: string, id: string) => {
    const response = await axios.delete(`${API_URL}/delete/${id}`, getAuthHeader(token));
    return response.data;
  },

  // --- SUPERADMIN SPECIFIC ---

  // Get Pending Admins (Superadmin)
  getPendingAdmins: async (token: string) => {
    const response = await axios.get(`${API_URL}/pending-admins`, getAuthHeader(token));
    return response.data;
  },

  // Approve or Reject Admin Application (Superadmin)
  handleAdminApplication: async (token: string, id: string, action: 'approve' | 'reject', reason?: string) => {
    const response = await axios.patch(`${API_URL}/handle-admin/${id}`, { action, reason }, getAuthHeader(token));
    return response.data;
  },

  // Promote to Admin (Superadmin)
  makeAdmin: async (token: string, id: string) => {
    const response = await axios.patch(`${API_URL}/make-admin/${id}`, {}, getAuthHeader(token));
    return response.data;
  },

  // Demote Admin (Superadmin)
  demoteAdmin: async (token: string, id: string) => {
    const response = await axios.patch(`${API_URL}/demote-admin/${id}`, {}, getAuthHeader(token));
    return response.data;
  },
};