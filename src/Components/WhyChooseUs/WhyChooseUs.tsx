import "./WhyChooseUs.css";
import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaMedal,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-us">

      <div className="why-header">

        <p>WHY CHOOSE US</p>

        <h2>
          Why Thousands Trust
          Loditojo Gadgets
        </h2>

      </div>

      <div className="why-grid">

        <div className="why-card">
          <FaShieldAlt />
          <h3>100% Genuine</h3>
          <p>
            Every gadget is authentic and sourced from trusted suppliers.
          </p>
        </div>

        <div className="why-card">
          <FaTruck />
          <h3>Fast Delivery</h3>
          <p>
            Nationwide delivery with reliable logistics partners.
          </p>
        </div>

        <div className="why-card">
          <FaHeadset />
          <h3>24/7 Support</h3>
          <p>
            Friendly customer support whenever you need assistance.
          </p>
        </div>

        <div className="why-card">
          <FaMedal />
          <h3>Best Prices</h3>
          <p>
            Competitive pricing without compromising quality.
          </p>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;