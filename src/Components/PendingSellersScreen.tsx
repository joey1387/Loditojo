import React, { useState, useEffect } from 'react';
import { userService } from '../services/userService';

interface UserItem {
  _id: string;
  name: string;
  email: string;
  sellerStatus: string;
}

export const PendingSellersScreen = ({ userToken }: { userToken: string }) => {
  const [sellers, setSellers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [rejectReason, setRejectReason] = useState<{ [key: string]: string }>({});

  const fetchSellers = async () => {
    setLoading(true);
    try {
      const data = await userService.getPendingSellers(userToken);
      if (data.success) {
        setSellers(data.users);
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error loading sellers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const handleAction = async (id: string, action: 'approve' | 'reject') => {
    const reason = rejectReason[id];
    if (action === 'reject' && !reason) {
      alert('Please enter a rejection reason first.');
      return;
    }

    try {
      const res = await userService.handleSellerApplication(userToken, id, action, reason);
      if (res.success) {
        alert(res.message);
        // Remove processed seller from local state
        setSellers((prev) => prev.filter((s) => s._id !== id));
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Action failed');
    }
  };

  return (
    <div style={{ padding: '16px', maxWidth: '480px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Pending Sellers ({sellers.length})</h2>

      {loading ? (
        <p>Loading pending seller requests...</p>
      ) : sellers.length === 0 ? (
        <p>No pending seller applications.</p>
      ) : (
        sellers.map((seller) => (
          <div
            key={seller._id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '12px',
              backgroundColor: '#fff',
            }}
          >
            <h3 style={{ margin: '0 0 4px 0' }}>{seller.name}</h3>
            <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '14px' }}>{seller.email}</p>

            <input
              type="text"
              placeholder="Reason for rejection (if rejecting)"
              value={rejectReason[seller._id] || ''}
              onChange={(e) =>
                setRejectReason({ ...rejectReason, [seller._id]: e.target.value })
              }
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '8px',
                boxSizing: 'border-box',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleAction(seller._id, 'approve')}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                }}
              >
                Approve
              </button>
              <button
                onClick={() => handleAction(seller._id, 'reject')}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                }}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};