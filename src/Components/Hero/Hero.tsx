import "./Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/icons/hero-gadget.png";
import {
  FaTruck,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          ⭐ Nigeria's Trusted Tech Store
        </div>

        <h1>
          Level Up Your
          <br />
          Digital Lifestyle
        </h1>

        <p className="hero-slogan">
          Premium Gadgets. Trusted Technology.
        </p>

        <p>
          Discover authentic smartphones, laptops,
          gaming devices and smart accessories from
          the world's leading brands.
        </p>

        <div className="hero-buttons">

          <button
            className="shop-btn"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>

          <button
            className="explore-btn"
            onClick={() => navigate("/shop")}
          >
            Explore Products
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Premium Products</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>

        </div>

        <div className="hero-search">

          <input
            type="text"
            placeholder="Search for phones, laptops, accessories..."
          />

          <button>
            Search
          </button>

        </div>

        <div className="hero-tags">

          <span>
            <FaTruck />
            Free Delivery
          </span>

          <span>
            <FaShieldAlt />
            Secure Payment
          </span>

          <span>
            <FaCheckCircle />
            Genuine Products
          </span>

        </div>

      </div>

      <div className="hero-right">

 <img src="/src/assets/icons/hero-gadget.png" alt="Hero Gadget" />

  <div className="floating-card card1">
    📦 Fast Delivery
  </div>

  <div className="floating-card card2">
    ⭐ 4.9 Customer Rating
  </div>

  <div className="floating-card card3">
    🔒 Secure Checkout
  </div>

</div>

    </section>
  );
};

export default Hero;