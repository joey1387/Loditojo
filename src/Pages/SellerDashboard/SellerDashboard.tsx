import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardLayout from '../../Components/DashboardLayout'; // or relative to your file path
interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

const navItems = [
  { label: 'Overview', path: '/seller/dashboard' },
  { label: 'My Products', path: '/seller/products' },
  { label: 'Orders', path: '/seller/orders' },
  { label: 'Analytics', path: '/seller/analytics' },
];

const SellerDashboard: React.FC = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        setLoading(true);
        // Replace with your API call to fetch seller products
        // const res = await getSellerProducts();
        // setProducts(res.data);
      } catch (error) {
        console.error('Failed to load seller data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellerData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div className="p-6 text-gray-500">Loading dashboard...</div>;
    }

    switch (location.pathname) {
      case '/seller/products':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Inventory</h2>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
                + Add New Product
              </button>
            </div>
            {products.length === 0 ? (
              <p className="text-gray-500">No products added yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-50 text-sm font-semibold text-gray-600">
                      <th className="p-3">Product Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Price</th>
                      <th className="p-3">Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((prod) => (
                      <tr key={prod._id} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{prod.name}</td>
                        <td className="p-3 text-gray-600">{prod.category}</td>
                        <td className="p-3 font-semibold">${prod.price.toFixed(2)}</td>
                        <td className="p-3">{prod.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case '/seller/orders':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Customer Orders</h2>
            <p className="text-gray-500">Order history and tracking management.</p>
          </div>
        );

      case '/seller/analytics':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Store Performance</h2>
            <p className="text-gray-500">Sales metrics and analytics reports.</p>
          </div>
        );

      case '/seller/dashboard':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Active Listings</h3>
              <p className="text-3xl font-bold mt-2">{products.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
              <p className="text-3xl font-bold mt-2 text-indigo-600">$0.00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Pending Orders</h3>
              <p className="text-3xl font-bold mt-2 text-yellow-600">0</p>
            </div>
          </div>
        );
    }
  };

  return (
    <DashboardLayout title="Seller Hub" navItems={navItems}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default SellerDashboard;