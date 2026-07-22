import "./OrderTracking.css";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaTruck,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderTracking = () => {

  const { id } = useParams();

  const [loading, setLoading] =
    useState(true);

  const [order, setOrder] =
    useState<any>(null);

  useEffect(() => {

    const fetchOrder = async () => {

      try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/orders/${id}`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Unable to fetch order."
          );
        }

        const data =
          await response.json();

        setOrder(
          data.order || data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchOrder();

  }, [id]);

  if (loading) {

    return (
      <div className="loading-page">
        Loading order...
      </div>
    );

  }

  if (!order) {

    return (
      <div className="loading-page">
        Order not found.
      </div>
    );

  }

  const progress =
    order.status === "Pending"
      ? 20
      : order.status === "Processing"
      ? 45
      : order.status === "Out for Delivery"
      ? 75
      : order.status === "Delivered"
      ? 100
      : 0;

  return (

    <section className="order-page">

      <div className="order-header">

        <h1>Track Your Order</h1>

        <p>

          Order Number:

          <strong>
            {" "}
            {order.orderNumber ||
              order._id}
          </strong>

        </p>

      </div>

      <div className="tracking-card">

        <div className="tracking-top">

          <div>

            <h3>Current Status</h3>

            <span className="status">
              {order.status}
            </span>

          </div>

          <div>

            <h3>Payment</h3>

            <span className="paid">
              {order.paymentStatus}
            </span>

          </div>

        </div>

        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="timeline">
                    <div
            className={
              progress >= 20
                ? "active"
                : ""
            }
          >
            <FaCheckCircle />
            <p>Order Placed</p>
          </div>

          <div
            className={
              progress >= 45
                ? "active"
                : ""
            }
          >
            <FaBoxOpen />
            <p>Processing</p>
          </div>

          <div
            className={
              progress >= 75
                ? "active"
                : ""
            }
          >
            <FaTruck />
            <p>Out for Delivery</p>
          </div>

          <div
            className={
              progress === 100
                ? "active"
                : ""
            }
          >
            <FaMapMarkerAlt />
            <p>Delivered</p>
          </div>

        </div>

      </div>

      <div className="delivery-card">

        <h2>Delivery Details</h2>

        <p>
          <strong>Customer:</strong>{" "}
          {order.user?.name ||
            order.customer?.name ||
            "N/A"}
        </p>

        <p>
          <strong>Address:</strong>{" "}
          {order.shippingAddress
            ? `${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.state}`
            : "No address"}
        </p>

        <p>
          <strong>
            Estimated Arrival:
          </strong>{" "}
          {order.estimatedDelivery ||
            "To be communicated"}
        </p>

      </div>

      <div className="items-card">

        <h2>Ordered Items</h2>

        {order.items?.map(
          (item: any) => (

            <div
              key={
                item._id ||
                item.product
              }
              className="item"
            >

              <span>
                {item.name ||
                  item.product
                    ?.name}
              </span>

              <span>
                x{item.quantity}
              </span>

              <strong>
                ₦
                {(
                  item.price *
                  item.quantity
                ).toLocaleString()}
              </strong>

            </div>

          )
        )}

      </div>

    </section>

  );
};

export default OrderTracking;