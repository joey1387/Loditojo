import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img
            src={logo}
            alt="Loditojo Gadgets"
          />

          <p>
            Premium gadgets for modern lifestyles.
            We provide authentic smartphones,
            laptops, gaming devices and accessories
            with fast nationwide delivery.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Categories</h3>

          <Link to="/shop?category=phones">
            Phones
          </Link>

          <Link to="/shop?category=laptops">
            Laptops
          </Link>

          <Link to="/shop?category=accessories">
            Accessories
          </Link>

          <Link to="/shop">
            All Products
          </Link>
        </div>

        <div>
          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt />
            +234 800 000 0000
          </p>

          <p>
            <FaEnvelope />
            support@loditojo.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Enugu, Enugu State, Nigeria
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="payment-icons">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
        </div>

        <p>
          © 2026 Loditojo Gadgets. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;