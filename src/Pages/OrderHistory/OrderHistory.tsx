import { useEffect, useState } from "react";
import "./OrderHistory.css";
import { useNavigate } from "react-router-dom";
import { getUserOrders } from "../../api/orderApi";

const OrderHistory = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // GET /api/orders/my-orders
        const data = await getUserOrders();
        const rawOrders = data.orders || data.data || data || [];

        const formattedOrders = rawOrders.map((order: any) => ({
          _id: order._id,
          id: order.orderNumber || order._id,
          date: new Date(order.createdAt || Date.now()).toLocaleDateString(),
          status: order.status || "Processing",
          total: order.totalAmount || order.total || 0,
        }));

        setOrders(formattedOrders);
      } catch (err) {
        console.error("Error fetching user orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <section className="order-history-page loading-state">
        <div className="spinner"></div>
        <h2>Loading orders...</h2>
      </section>
    );
  }

  return (
    <section className="order-history-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <button onClick={() => navigate("/shop")}>Start Shopping</button>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id || order.id} className="order-card">
              <div className="order-info">
                <h3>Order #{String(order.id).slice(-8)}</h3>
                <p>{order.date}</p>
              </div>

              <div className="order-status-col">
                <span
                  className={`status ${String(order.status)
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="order-total-col">
                <strong>₦{Number(order.total).toLocaleString()}</strong>
              </div>

              <button
                className="track-btn"
                onClick={() =>
                  navigate(`/track-order/${order._id || order.id}`)
                }
              >
                Track Order
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistory;