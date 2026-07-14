import "./WhyChooseUs.css";
import {
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaMedal,
  FaCheckCircle,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-us">

      <div className="why-left">

        <span className="why-tag">
          WHY CHOOSE LODITOJO
        </span>

        <h2>
          Experience Shopping
          Without Worries
        </h2>

        <p className="why-description">
          We believe buying gadgets should be easy,
          secure and enjoyable. From authentic products
          to nationwide delivery, we've built an experience
          customers can trust.
        </p>

        <div className="why-list">

          <div>
            <FaCheckCircle />
            <span>100% Genuine Products</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Nationwide Fast Delivery</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Secure Online Payments</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Easy Returns & Warranty</span>
          </div>

        </div>

        <div className="why-stats">

          <div>
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>500+</h3>
            <p>Products</p>
          </div>

          <div>
            <h3>99%</h3>
            <p>Satisfaction</p>
          </div>

        </div>

      </div>

      <div className="why-right">

        <div className="why-card">
          <FaShieldAlt />
          <h3>Authentic Products</h3>
          <p>
            Every item is sourced from verified distributors.
          </p>
        </div>

        <div className="why-card">
          <FaTruck />
          <h3>Fast Delivery</h3>
          <p>
            Reliable delivery to every state in Nigeria.
          </p>
        </div>

        <div className="why-card">
          <FaHeadset />
          <h3>24/7 Support</h3>
          <p>
            Friendly experts ready to help you anytime.
          </p>
        </div>

        <div className="why-card">
          <FaMedal />
          <h3>Best Value</h3>
          <p>
            Premium gadgets at competitive prices.
          </p>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;