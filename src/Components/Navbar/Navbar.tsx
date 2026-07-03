import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const { cart } = useCart();
  const { isLoggedIn, user , logout} = useAuth();
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  
 return (
  <nav className="navbar">

    <Link to="/" className="logo">
      <img
        src={logo}
        alt="Loditojo Gadgets"
      />
    </Link>

    <div className="nav-links">

  <NavLink to="/">Home</NavLink>

  <NavLink to="/shop">Shop</NavLink>

  <NavLink to="/categories">Categories</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>

</div>

<div className="nav-actions">

  {isLoggedIn ? (
    <>
      <span className="welcome">
        Hi, {user?.fullName}
      </span>

      <button
        className="logout-btn"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </>
  ) : (
    <>
     <NavLink to="/login">Login </NavLink>

      <NavLink to="/register">Register</NavLink>
    </>
  )}

  <Link to="/cart" className="cart-link">
    <AiOutlineShoppingCart size={24} />

    {totalItems > 0 && (
      <span className="cart-count">
        {totalItems}
      </span>
    )}
  </Link>

</div>

  </nav>
);
}
export default Navbar;