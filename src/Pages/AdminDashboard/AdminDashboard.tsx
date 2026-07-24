import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardLayout from '../../Components/DashboardLayout'; // or relative to your file path
interface Seller {
  _id: string;
  storeName: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

const navItems = [
  { label: 'Overview', path: '/admin/dashboard' },
  { label: 'Manage Sellers', path: '/admin/sellers' },
  { label: 'Manage Products', path: '/admin/products' },
  { label: 'Users', path: '/admin/users' },
];

const AdminDashboard: React.FC = () => {
  const location = useLocation();
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data for admin dashboard
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API calls
        // const sellersRes = await getSellers();
        // setSellers(sellersRes.data);
      } catch (error) {
        console.error('Failed to load admin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = async (sellerId: string, status: 'approved' | 'rejected') => {
    try {
      setActionLoading(sellerId);
      // Replace with your API endpoint
      // await updateSellerStatus(sellerId, status);
      setSellers((prev) =>
        prev.map((s) => (s._id === sellerId ? { ...s, status } : s))
      );
    } catch (error) {
      console.error(`Failed to update status to ${status}:`, error);
    } finally {
      setActionLoading(null);
    }
  };

  // Render view depending on the current route path
  const renderContent = () => {
    if (loading) {
      return <div className="p-6 text-gray-500">Loading dashboard...</div>;
    }

    switch (location.pathname) {
      case '/admin/sellers':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Seller Applications</h2>
            {sellers.length === 0 ? (
              <p className="text-gray-500">No sellers registered yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-50 text-sm font-semibold text-gray-600">
                      <th className="p-3">Store Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellers.map((seller) => (
                      <tr key={seller._id} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{seller.storeName || 'N/A'}</td>
                        <td className="p-3 text-gray-600">{seller.email}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              seller.status === 'approved'
                                ? 'bg-green-100 text-green-800'
                                : seller.status === 'rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {seller.status}
                          </span>
                        </td>
                        <td className="p-3 text-right space-x-2">
                          <button
                            disabled={actionLoading === seller._id || seller.status === 'approved'}
                            onClick={() => handleStatusChange(seller._id, 'approved')}
                            className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 disabled:opacity-50"
                          >
                            Approve
                          </button>
                          <button
                            disabled={actionLoading === seller._id || seller.status === 'rejected'}
                            onClick={() => handleStatusChange(seller._id, 'rejected')}
                            className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 disabled:opacity-50"
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case '/admin/products':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">All Platform Products</h2>
            <p className="text-gray-500">Product management view goes here.</p>
          </div>
        );

      case '/admin/users':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">User Accounts</h2>
            <p className="text-gray-500">User account management view goes here.</p>
          </div>
        );

      case '/admin/dashboard':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Sellers</h3>
              <p className="text-3xl font-bold mt-2">{sellers.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Pending Approvals</h3>
              <p className="text-3xl font-bold mt-2 text-yellow-600">
                {sellers.filter((s) => s.status === 'pending').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
              <p className="text-3xl font-bold mt-2">{products.length}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <DashboardLayout title="Admin Control Center" navItems={navItems}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default AdminDashboard;