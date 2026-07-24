import "./Navbar.css";
import logo from "../../assets/logo.svg";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineGlobal,
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
  FaStore,
  FaSignInAlt,
  FaUserPlus,
  FaLanguage,
  FaTachometerAlt,
} from "react-icons/fa";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";

import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";
import { useCurrency, Currency, SUPPORTED_CURRENCIES } from "../../context/CurrencyContext";
import { useLanguage, LanguageCode } from "../../context/LanguageContext";
import MiniCart from "../MiniCart/MiniCart";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { compare } = useCompare();
  const { isLoggedIn, user, logout } = useAuth();
  const { currency, setCurrency, supportedCurrencies } = useCurrency();
  const { language, setLanguage, t, supportedLanguages = [] } = useLanguage();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [langFilter, setLangFilter] = useState("");
  const [currFilter, setCurrFilter] = useState("");

  const profileRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const closeMenu = () => setMenuOpen(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      closeMenu();
    }
  };

  // Close profile, currency, and language dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
      if (
        currencyRef.current &&
        !currencyRef.current.contains(event.target as Node)
      ) {
        setCurrencyOpen(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* Mobile Hamburger Toggle */}
        <button
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Sidebar Navigation"
        >
          <AiOutlineMenu size={24} />
        </button>

        {/* Brand Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Loditojo Gadgets" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only">
          <NavLink to="/">{t("home")}</NavLink>
          <NavLink to="/shop">{t("shop")}</NavLink>
          <NavLink to="/about">{t("about")}</NavLink>
        </div>

        {/* Search Bar */}
        <form className="nav-search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <AiOutlineSearch size={20} />
          </button>
        </form>

        {/* Action Utilities */}
        <div className="nav-actions">
          {/* Language Switcher Dropdown */}
          <div className="language-menu" ref={languageRef}>
            <button
              className="currency-btn"
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setCurrencyOpen(false);
                setProfileOpen(false);
              }}
              aria-label="Select Language"
            >
              <FaLanguage size={18} />
              <span className="currency-btn-code">{(language || "en").toUpperCase()}</span>
              <FaChevronDown
                size={10}
                className={`chevron-icon ${languageOpen ? "rotate" : ""}`}
              />
            </button>

            {languageOpen && (
              <div className="currency-dropdown lang-dropdown-large">
                <div className="currency-dropdown-header">{t("selectLanguage")}</div>

                {/* Language Filter Input */}
                <div className="dropdown-search-box">
                  <input
                    type="text"
                    placeholder="Search language..."
                    value={langFilter}
                    onChange={(e) => setLangFilter(e.target.value)}
                  />
                </div>

                <div className="language-options-grid">
                  {supportedLanguages
                    .filter(
                      (l) =>
                        l.label.toLowerCase().includes(langFilter.toLowerCase()) ||
                        l.nativeLabel.toLowerCase().includes(langFilter.toLowerCase())
                    )
                    .map((lang) => (
                      <button
                        key={lang.code}
                        className={`lang-option-card ${
                          lang.code === language ? "active" : ""
                        }`}
                        onClick={() => {
                          setLanguage(lang.code as LanguageCode);
                          setLanguageOpen(false);
                          setLangFilter("");
                        }}
                      >
                        <span className="lang-native">{lang.nativeLabel}</span>
                        <span className="lang-sub">({lang.label})</span>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Currency Switcher Dropdown */}
          <div className="currency-menu" ref={currencyRef}>
            <button
              className="currency-btn"
              onClick={() => {
                setCurrencyOpen(!currencyOpen);
                setLanguageOpen(false);
                setProfileOpen(false);
              }}
              aria-label="Select Currency"
            >
              <AiOutlineGlobal size={18} />
              <span className="currency-btn-code">{currency}</span>
              <FaChevronDown
                size={10}
                className={`chevron-icon ${currencyOpen ? "rotate" : ""}`}
              />
            </button>

            {currencyOpen && (
              <div className="currency-dropdown">
                <div className="currency-dropdown-header">{t("selectCurrency")}</div>

                {/* Currency Filter Input */}
                <div className="dropdown-search-box">
                  <input
                    type="text"
                    placeholder="Search currency..."
                    value={currFilter}
                    onChange={(e) => setCurrFilter(e.target.value)}
                  />
                </div>

                <div className="currency-options-grid-30">
                  {supportedCurrencies
                    .filter((curr) => {
                      const details = SUPPORTED_CURRENCIES[curr];
                      const q = currFilter.toLowerCase();
                      return (
                        curr.toLowerCase().includes(q) ||
                        details?.country.toLowerCase().includes(q) ||
                        details?.name.toLowerCase().includes(q)
                      );
                    })
                    .map((curr) => {
                      const info = SUPPORTED_CURRENCIES[curr];
                      return (
                        <button
                          key={curr}
                          className={`currency-option-card ${
                            curr === currency ? "active" : ""
                          }`}
                          onClick={() => {
                            setCurrency(curr as Currency);
                            setCurrencyOpen(false);
                            setCurrFilter("");
                          }}
                        >
                          <span className="currency-symbol">{info?.symbol}</span>
                          <span className="currency-code-text">{curr}</span>
                          <span className="currency-country">{info?.country}</span>
                        </button>
                      );
                    })}
                </div>
              </div>
            )}
          </div>

          {/* Wishlist Link */}
          <Link to="/wishlist" className="cart-link" aria-label="Wishlist">
            <AiOutlineHeart size={22} />
            {wishlist.length > 0 && (
              <span className="cart-count">{wishlist.length}</span>
            )}
          </Link>

          {/* Compare Link */}
          <Link
            to="/compare"
            className="cart-link"
            aria-label="Compare Products"
          >
            <FaBalanceScale size={18} />
            {compare.length > 0 && (
              <span className="cart-count">{compare.length}</span>
            )}
          </Link>

          {/* Cart Trigger */}
          <button
            className="cart-link cart-btn"
            onClick={() => setCartOpen(true)}
            aria-label="Open Cart"
          >
            <AiOutlineShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </button>

          {/* Profile Menu Dropdown */}
          <div className="profile-menu" ref={profileRef}>
            <button
              className="profile-btn"
              onClick={() => {
                setProfileOpen(!profileOpen);
                setCurrencyOpen(false);
                setLanguageOpen(false);
              }}
              aria-expanded={profileOpen}
            >
              <FaUserCircle size={24} />
              <span className="profile-btn-name">
                {isLoggedIn ? user?.name?.split(" ")[0] : t("account")}
              </span>
              <FaChevronDown
                size={11}
                className={`chevron-icon ${profileOpen ? "rotate" : ""}`}
              />
            </button>

            {profileOpen && (
              <div className="profile-dropdown">
                {isLoggedIn ? (
                  <>
                    <div className="profile-header">
                      <FaUserCircle className="profile-avatar" size={36} />
                      <div className="profile-header-meta">
                        <h4>{user?.name}</h4>
                        <p>{user?.email}</p>
                      </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    {/* Admin Dashboard Option */}
                    {user?.role === "admin" && (
                      <Link
                        to="/admin/dashboard"
                        className="profile-item seller-highlight"
                        onClick={() => setProfileOpen(false)}
                      >
                        <FaTachometerAlt />
                        <span>Admin Dashboard</span>
                      </Link>
                    )}

                    {/* Seller Dashboard Option */}
                    {user?.role === "seller" && (
                      <Link
                        to="/seller/dashboard"
                        className="profile-item seller-highlight"
                        onClick={() => setProfileOpen(false)}
                      >
                        <FaStore />
                        <span>Seller Dashboard</span>
                      </Link>
                    )}

                    <Link
                      to="/profile"
                      className="profile-item"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaUser />
                      <span>{t("myProfile")}</span>
                    </Link>

                    <Link
                      to="/orders"
                      className="profile-item"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaBoxOpen />
                      <span>{t("orders")}</span>
                    </Link>

                    <Link
                      to="/inbox"
                      className="profile-item"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaInbox />
                      <span>{t("inbox")}</span>
                    </Link>

                    {/* Option to apply as a seller for regular customers */}
                    {user?.role !== "seller" && user?.role !== "admin" && (
                      <Link
                        to="/become-seller"
                        className="profile-item seller-highlight"
                        onClick={() => setProfileOpen(false)}
                      >
                        <FaStore />
                        <span>{t("becomeSeller")}</span>
                      </Link>
                    )}

                    <Link
                      to="/settings"
                      className="profile-item"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaCog />
                      <span>{t("settings")}</span>
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
                      <span>{t("logout")}</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="profile-guest-header">
                      <h4>{t("welcome")}</h4>
                      <p>Manage orders, wishlist & sell gadgets.</p>
                    </div>

                    <div className="dropdown-divider"></div>

                    <Link
                      to="/login"
                      className="profile-item primary-action"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaSignInAlt />
                      <span>{t("login")}</span>
                    </Link>

                    <Link
                      to="/register"
                      className="profile-item secondary-action"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaUserPlus />
                      <span>{t("createAccount")}</span>
                    </Link>

                    <div className="dropdown-divider"></div>

                    <Link
                      to="/become-seller"
                      className="profile-item seller-highlight"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaStore />
                      <span>{t("becomeSeller")}</span>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      <Sidebar isOpen={menuOpen} onClose={closeMenu} />
      <MiniCart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;