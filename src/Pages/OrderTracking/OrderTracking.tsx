import "./OrderTracking.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaHome,
  FaArrowLeft,
} from "react-icons/fa";
import { getOrderById } from "../../api/orderApi";

interface TrackingStep {
  label: string;
  date?: string;
  completed: boolean;
  current: boolean;
  icon: JSX.Element;
}

const OrderTracking = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  const [order, setOrder] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) return;

      try {
        const data = await getOrderById(orderId);
        setOrder(data.order ?? data);
      } catch (err: any) {
        console.error(err);
        setError("Unable to load tracking details for this order.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <section className="order-tracking-page loading-state">
        <div className="spinner"></div>
        <h2>Loading tracking status...</h2>
      </section>
    );
  }

  if (error || !order) {
    return (
      <section className="order-tracking-page">
        <button className="back-btn" onClick={() => navigate("/order-history")}>
          <FaArrowLeft /> Back to Orders
        </button>
        <div className="error-card">
          <h2>Order Not Found</h2>
          <p>{error || "We couldn't locate the order details you requested."}</p>
        </div>
      </section>
    );
  }

  const status = (order.status || "Processing").toLowerCase();

  const steps: TrackingStep[] = [
    {
      label: "Order Placed",
      date: order.createdAt
        ? new Date(order.createdAt).toLocaleDateString()
        : "Confirmed",
      completed: true,
      current: status === "pending" || status === "placed",
      icon: <FaBox />,
    },
    {
      label: "Processing",
      date: status !== "pending" ? "In progress" : "Pending",
      completed: ["processing", "shipped", "out for delivery", "delivered"].includes(status),
      current: status === "processing",
      icon: <FaCheckCircle />,
    },
    {
      label: "Out for Delivery",
      date: ["out for delivery", "delivered"].includes(status) ? "On the way" : "Pending",
      completed: ["out for delivery", "delivered"].includes(status),
      current: status === "out for delivery" || status === "shipped",
      icon: <FaTruck />,
    },
    {
      label: "Delivered",
      date: status === "delivered" ? "Delivered" : "Expected soon",
      completed: status === "delivered",
      current: status === "delivered",
      icon: <FaHome />,
    },
  ];

  return (
    <section className="order-tracking-page">
      <button className="back-btn" onClick={() => navigate("/order-history")}>
        <FaArrowLeft /> Back to Orders
      </button>

      <div className="track-card">
        <div className="track-header">
          <div>
            <h1>Order Tracking</h1>
            <p className="order-id-label">
              Order #{(order._id || order.id || orderId)?.slice(-8)}
            </p>
          </div>
          <span className={`status-badge ${status.replace(/\s+/g, "")}`}>
            {order.status || "Processing"}
          </span>
        </div>

        {/* Timeline */}
        <div className="tracking-timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-step ${step.completed ? "completed" : ""} ${
                step.current ? "active" : ""
              }`}
            >
              <div className="step-icon-wrapper">
                <div className="step-icon">{step.icon}</div>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
              <div className="step-content">
                <h3>{step.label}</h3>
                <small>{step.date}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Order Items Summary */}
        <div className="order-summary-section">
          <h2>Items in this Shipment</h2>
          <div className="summary-items">
            {(order.items || order.products || []).map((item: any, idx: number) => (
              <div className="summary-item" key={idx}>
                <img
                  src={item.image || item.product?.image || "/placeholder.jpg"}
                  alt={item.name || item.product?.name || "Product"}
                />
                <div className="item-details">
                  <h4>{item.name || item.product?.name}</h4>
                  <p>Qty: {item.quantity || 1}</p>
                </div>
                <div className="item-price">
                  ₦{Number(item.price || item.product?.price || 0).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;