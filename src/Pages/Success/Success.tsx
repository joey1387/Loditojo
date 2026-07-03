import "./Success.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
    <div className="success-page">

      <FaCheckCircle className="success-icon" />

      <h1>Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with Loditojo Gadgets.
        Your order has been received and is being processed.
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
  );
};

export default Success;