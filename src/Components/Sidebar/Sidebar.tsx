import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineInfoCircle,
  AiOutlineHeart,
  AiOutlineClose,
} from "react-icons/ai";
import { FaStore, FaBoxOpen, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.svg";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`sidebar-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <aside className={`sidebar-drawer ${isOpen ? "open" : ""}`}>
        {/* Header Section */}
        <div className="sidebar-header">
          <Link to="/" onClick={onClose}>
            <img src={logo} alt="Loditojo Gadgets" className="sidebar-logo" />
          </Link>
          <button
            className="sidebar-close-btn"
            onClick={onClose}
            aria-label="Close Sidebar"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="sidebar-content">
          <ul className="sidebar-nav-list">
            <li className="sidebar-nav-item">
              <NavLink to="/" onClick={onClose}>
                <AiOutlineHome />
                <span>Home</span>
              </NavLink>
            </li>

            <li className="sidebar-nav-item">
              <NavLink to="/shop" onClick={onClose}>
                <AiOutlineShopping />
                <span>Shop Catalog</span>
              </NavLink>
            </li>

            <li className="sidebar-nav-item">
              <NavLink to="/wishlist" onClick={onClose}>
                <AiOutlineHeart />
                <span>Wishlist</span>
              </NavLink>
            </li>

            {isLoggedIn && (
              <li className="sidebar-nav-item">
                <NavLink to="/orders" onClick={onClose}>
                  <FaBoxOpen />
                  <span>My Orders</span>
                </NavLink>
              </li>
            )}

            <li className="sidebar-nav-item">
              <NavLink to="/about" onClick={onClose}>
                <AiOutlineInfoCircle />
                <span>About Us</span>
              </NavLink>
            </li>
          </ul>

          <div className="sidebar-divider"></div>

          {/* Become a Seller CTA */}
          <div className="sidebar-cta">
            <h4>Earn with Loditojo</h4>
            <p>List your gadgets and reach thousands of buyers across Nigeria.</p>
            <Link
              to="/become-seller"
              className="sidebar-seller-btn"
              onClick={onClose}
            >
              <FaStore />
              <span>Become a Seller</span>
            </Link>
          </div>
        </div>

        {/* Footer Section */}
        <div className="sidebar-footer">
          {isLoggedIn ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaUserCircle size={28} color="#6c2bd9" />
              <div>
                <strong style={{ fontSize: "13px", display: "block", color: "#111827" }}>
                  {user?.name}
                </strong>
                <span style={{ fontSize: "11px", color: "#6b7280" }}>
                  {user?.email}
                </span>
              </div>
            </div>
          ) : (
            <p>© 2026 Loditojo Gadgets. All rights reserved.</p>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;