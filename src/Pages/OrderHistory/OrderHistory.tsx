import "./OrderHistory.css";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const navigate = useNavigate();

  

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
              navigate(`/track-order/${order._id || order.id}`)
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