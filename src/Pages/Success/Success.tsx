import "./Success.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
    <section className="success-page">
      <div className="success-card">
        <FaCheckCircle className="success-icon" />

        <h1>Payment Successful!</h1>

        <p>
          Thank you for shopping with <strong>Loditojo Gadgets.</strong>
        </p>

        <p>
          Your order has been received successfully and is now being processed.
          You will receive updates as soon as your order is confirmed.
        </p>

        <div className="success-buttons">
          <Link to="/shop">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>

          <Link to="/">
            <button className="home-btn">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;