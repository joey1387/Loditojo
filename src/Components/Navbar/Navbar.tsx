import "./Navbar.css";
import logo from "../../assets/logo.svg";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeart,
} from "react-icons/ai";

import { FaBalanceScale } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";
import MiniCart from "../MiniCart/MiniCart";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { compare } = useCompare();
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
const [cartOpen, setCartOpen] = useState(false);
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <img
          src={logo}
          alt="Loditojo Gadgets"
        />
      </Link>

      <div className="menu-icon">

        {menuOpen ? (

          <AiOutlineClose
            size={30}
            onClick={() => setMenuOpen(false)}
          />

        ) : (

          <AiOutlineMenu
            size={30}
            onClick={() => setMenuOpen(true)}
          />

        )}

      </div>

      <div
        className={
          menuOpen
            ? "nav-links active-menu"
            : "nav-links"
        }
      >

        <NavLink
          to="/"
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          onClick={closeMenu}
        >
          Shop
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </NavLink>

        {!isLoggedIn ? (
          <>
            <NavLink
              to="/login"
              onClick={closeMenu}
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              onClick={closeMenu}
            >
              Register
            </NavLink>
          </>
        ) : (
          <>
            <span className="welcome">
              Hi, {user?.name}
            </span>

            <button
              className="logout-btn"
              onClick={() => {
                logout();
                closeMenu();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        )}

      </div>
  
      <div className="nav-actions">
<button
  className="theme-btn"
  onClick={toggleTheme}
>
  {theme === "light" ? (
    <BsMoonStarsFill />
  ) : (
    <BsSunFill />
  )}
</button>
  <Link
    to="/wishlist"
    className="cart-link"
  >
    <AiOutlineHeart size={24} />

    {wishlist.length > 0 && (
      <span className="cart-count">
        {wishlist.length}
      </span>
    )}
  </Link>

  <Link
    to="/compare"
    className="cart-link"
  >
    <FaBalanceScale size={20} />

    {compare.length > 0 && (
      <span className="cart-count">
        {compare.length}
      </span>
    )}
  </Link>

  <button
  className="cart-link cart-btn"
  onClick={() => setCartOpen(true)}
>
  <AiOutlineShoppingCart size={25} />

  {totalItems > 0 && (
    <span className="cart-count">
      {totalItems}
    </span>
  )}
</button>

</div>
<MiniCart
open={cartOpen}
onClose={() => setCartOpen(false)}
/>
    </nav>
  );
};

export default Navbar;