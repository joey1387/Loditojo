import "./OrderHistory.css";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: "LDT-240713-001",
      date: "14 July 2026",
      status: "Out for Delivery",
      total: 2600000,
    },
    {
      id: "LDT-240701-002",
      date: "1 July 2026",
      status: "Delivered",
      total: 950000,
    },
    {
      id: "LDT-240620-003",
      date: "20 June 2026",
      status: "Delivered",
      total: 1850000,
    },
  ];

  return (
    <section className="order-history-page">

      <h1>My Orders</h1>

      <div className="orders-list">

        {orders.map((order) => (

          <div
            key={order.id}
            className="order-card"
          >

            <div>

              <h3>{order.id}</h3>

              <p>{order.date}</p>

            </div>

            <div>

              <span
                className={`status ${order.status
                  .replace(/\s/g, "")
                  .toLowerCase()}`}
              >
                {order.status}
              </span>

            </div>

            <div>

              <strong>
                ₦{order.total.toLocaleString()}
              </strong>

            </div>

            <button
              onClick={() =>
                navigate("/track-order")
              }
            >
              Track Order
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default OrderHistory;