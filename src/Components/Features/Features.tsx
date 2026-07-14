import "./Features.css";
import { FaTruck, FaShieldAlt, FaCreditCard, FaHeadset } from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">
      <h2>Why Shop With Us?</h2>
      <p className="features-subtitle">
        Discover the advantages of choosing Loditojo Gadgets.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <FaTruck className="feature-icon" />
          <h3>Free Nationwide Delivery</h3>
          <p>Fast delivery across Nigeria, right to your doorstep.</p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>100% Genuine Products</h3>
          <p>We only offer original gadgets from top brands.</p>
        </div>

        <div className="feature-card">
          <FaCreditCard className="feature-icon" />
          <h3>Secure Payment</h3>
          <p>Pay safely with Paystack, Flutterwave, and other trusted gateways.</p>
        </div>

        <div className="feature-card">
          <FaHeadset className="feature-icon" />
          <h3>24/7 Customer Support</h3>
          <p>Our team is always ready to help you, any time of the day.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;