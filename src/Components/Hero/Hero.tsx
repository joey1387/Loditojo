import "./Hero.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/icons/hero-gadget.png";
import {
  FaTruck,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaAward,
} from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/shop");
    }
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-badge">
          <FaAward />
          <span>Nigeria's Trusted Tech Store</span>
        </div>

        <h1>
          Level Up Your
          <br />
          Digital Lifestyle
        </h1>

        <p className="hero-slogan">Premium Gadgets. Trusted Technology.</p>

        <p className="hero-desc">
          Discover authentic smartphones, laptops, gaming devices, and smart
          accessories from the world's leading brands.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn" onClick={() => navigate("/shop")}>
            Shop Now
          </button>
          <button className="explore-btn" onClick={() => navigate("/shop")}>
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
            <p>Support</p>
          </div>
        </div>

        <form className="hero-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for phones, laptops, accessories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="hero-tags">
          <span>
            <FaTruck /> Free Delivery
          </span>
          <span>
            <FaShieldAlt /> Secure Payment
          </span>
          <span>
            <FaCheckCircle /> Genuine Products
          </span>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Hero Gadget" />

        <div className="floating-card card1" title="Fast Shipping">
          <FaTruck />
        </div>
        <div className="floating-card card2" title="Top Rated">
          <FaStar />
        </div>
        <div className="floating-card card3" title="100% Genuine">
          <FaShieldAlt />
        </div>
      </div>
    </section>
  );
};

export default Hero;