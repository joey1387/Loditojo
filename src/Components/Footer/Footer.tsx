import "./Footer.css";
import logo from "../../assets/icons/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <img src={logo} alt="Loditojo" />

          <h2>Loditojo Gadgets</h2>

          <p>
            Premium Gadgets. Trusted Technology.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>

        </div>

        <div className="footer-links">

          <h3>Support</h3>

          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaXTwitter />

            <FaLinkedinIn />

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Loditojo Gadgets. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;