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
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Loditojo Gadgets" />
            </Link>

            <p className="brand-desc">
              Premium gadgets for modern lifestyles. We provide authentic smartphones,
              laptops, gaming devices, and accessories with fast nationwide delivery.
            </p>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="footer-col">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li><Link to="/shop?category=phones">Phones</Link></li>
              <li><Link to="/shop?category=laptops">Laptops</Link></li>
              <li><Link to="/shop?category=accessories">Accessories</Link></li>
              <li><Link to="/shop">All Products</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-contact">
              <p>
                <FaPhoneAlt className="contact-icon" />
                <span>+234 800 000 0000</span>
              </p>
              <p>
                <FaEnvelope className="contact-icon" />
                <span>support@loditojo.com</span>
              </p>
              <p>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Enugu, Enugu State, Nigeria</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Loditojo Gadgets. All Rights Reserved.
          </p>

          <div className="payment-icons">
            <FaCcVisa title="Visa" />
            <FaCcMastercard title="Mastercard" />
            <FaCcPaypal title="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;