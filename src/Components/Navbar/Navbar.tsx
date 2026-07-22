import "./Navbar.css";
import logo from "../../assets/logo.svg";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";
import {
  FaBalanceScale,
  FaUserCircle,
  FaUser,
  FaCog,
  FaBoxOpen,
  FaInbox,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";

import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";
import MiniCart from "../MiniCart/MiniCart";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { compare } = useCompare();
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const closeMenu = () => setMenuOpen(false);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Loditojo Gadgets" />
      </Link>

      {/* Primary Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active-menu" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/shop" onClick={closeMenu}>
          Shop
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        {/* Guest Auth Links inside mobile menu */}
        {!isLoggedIn && (
          <div className="mobile-auth-actions">
            <NavLink to="/login" onClick={closeMenu} className="auth-btn login-btn">
              Login
            </NavLink>
            <NavLink to="/register" onClick={closeMenu} className="auth-btn register-btn">
              Register
            </NavLink>
          </div>
        )}
      </div>

      {/* Action Utility Items */}
      <div className="nav-actions">
        {/* Wishlist Link */}
        <Link to="/wishlist" className="cart-link" aria-label="Wishlist">
          <AiOutlineHeart size={22} />
          {wishlist.length > 0 && <span className="cart-count">{wishlist.length}</span>}
        </Link>

        {/* Compare Link */}
        <Link to="/compare" className="cart-link" aria-label="Compare Products">
          <FaBalanceScale size={18} />
          {compare.length > 0 && <span className="cart-count">{compare.length}</span>}
        </Link>

        {/* Cart Trigger */}
        <button className="cart-link cart-btn" onClick={() => setCartOpen(true)} aria-label="Open Cart">
          <AiOutlineShoppingCart size={22} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>

        {/* Desktop Guest Auth Actions */}
        {!isLoggedIn && (
          <div className="desktop-auth-actions">
            <Link to="/login" className="auth-link">
              Login
            </Link>
            <Link to="/register" className="auth-btn register-btn">
              Register
            </Link>
          </div>
        )}

        {/* Authenticated User Menu */}
        {isLoggedIn && (
          <div className="profile-menu" ref={profileRef}>
            <button
              className="profile-btn"
              onClick={() => setProfileOpen(!profileOpen)}
              aria-expanded={profileOpen}
            >
              <FaUserCircle size={24} />
              <span className="profile-btn-name">{user?.name?.split(" ")[0]}</span>
              <FaChevronDown size={11} className={`chevron-icon ${profileOpen ? "rotate" : ""}`} />
            </button>

            {profileOpen && (
              <div className="profile-dropdown">
                <div className="profile-header">
                  <FaUserCircle className="profile-avatar" size={32} />
                  <div className="profile-header-meta">
                    <h4>{user?.name}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                <Link to="/profile" className="profile-item" onClick={() => setProfileOpen(false)}>
                  <FaUser />
                  <span>My Profile</span>
                </Link>

                <Link to="/orders" className="profile-item" onClick={() => setProfileOpen(false)}>
                  <FaBoxOpen />
                  <span>Orders</span>
                </Link>

                <Link to="/inbox" className="profile-item" onClick={() => setProfileOpen(false)}>
                  <FaInbox />
                  <span>Inbox</span>
                </Link>

                <Link to="/settings" className="profile-item" onClick={() => setProfileOpen(false)}>
                  <FaCog />
                  <span>Settings</span>
                </Link>

                <div className="dropdown-divider"></div>

                <button
                  className="logout-dropdown"
                  onClick={() => {
                    setProfileOpen(false);
                    logout();
                    navigate("/");
                  }}
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Icon Toggle */}
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {menuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}

      {/* MiniCart Drawer */}
      <MiniCart open={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;