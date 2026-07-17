import "./OrderTracking.css";
import { FaBoxOpen, FaCheckCircle, FaTruck, FaMapMarkerAlt } from "react-icons/fa";

const OrderTracking = () => {
  const order = {
    orderNumber: "LDT-240713-001",
    customer: "Joseph Forghe",
    status: "Out for Delivery",
    estimated: "Tomorrow, 10:00 AM - 2:00 PM",
    address: "Enugu, Nigeria",
    payment: "Paid",
    items: [
      {
        name: "iPhone 15 Pro",
        quantity: 1,
        price: 1850000,
      },
      {
        name: "Apple Watch Series 10",
        quantity: 1,
        price: 750000,
      },
    ],
  };

  return (
    <section className="order-page">

      <div className="order-header">

        <h1>Track Your Order</h1>

        <p>
          Order Number:
          <strong> {order.orderNumber}</strong>
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
              {order.payment}
            </span>

          </div>

        </div>

        <div className="progress">

          <div className="progress-fill"></div>

        </div>

        <div className="timeline">

          <div className="active">
            <FaCheckCircle />
            <p>Order Placed</p>
          </div>

          <div className="active">
            <FaCheckCircle />
            <p>Payment Confirmed</p>
          </div>

          <div className="active">
            <FaBoxOpen />
            <p>Processing</p>
          </div>

          <div className="active">
            <FaTruck />
            <p>Out for Delivery</p>
          </div>

          <div>
            <FaMapMarkerAlt />
            <p>Delivered</p>
          </div>

        </div>

      </div>

      <div className="delivery-card">

        <h2>Delivery Details</h2>

        <p>
          <strong>Customer:</strong> {order.customer}
        </p>

        <p>
          <strong>Address:</strong> {order.address}
        </p>

        <p>
          <strong>Estimated Arrival:</strong>{" "}
          {order.estimated}
        </p>

      </div>

      <div className="items-card">

        <h2>Ordered Items</h2>

        {order.items.map((item, index) => (

          <div
            key={index}
            className="item"
          >

            <span>
              {item.name}
            </span>

            <span>x{item.quantity}</span>

            <strong>
              ₦{item.price.toLocaleString()}
            </strong>

          </div>

        ))}

      </div>

    </section>
  );
};

export default OrderTracking;