import "./MiniCart.css";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useCurrency } from "../../context/CurrencyContext";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

const MiniCart = ({ open, onClose }: Props) => {
  const { cart, removeFromCart } = useCart();
  const { isLoggedIn } = useAuth();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div
      className={`mini-cart-overlay ${open ? "show" : ""}`}
      onClick={onClose}
    >
      <div className="mini-cart" onClick={(e) => e.stopPropagation()}>
        <div className="mini-cart-header">
          <h2>Your Cart ({totalItems})</h2>
          <FaTimes className="close-cart" onClick={onClose} />
        </div>

        {cart.length === 0 ? (
          <div className="mini-cart-empty">
            <p>Your cart is empty.</p>
            <button
              onClick={() => {
                navigate("/shop");
                onClose();
              }}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="mini-cart-body">
              {cart.map((item) => (
                <div key={item.id} className="mini-cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.png";
                    }}
                  />

                  <div className="mini-cart-details">
                    <h4>{item.name}</h4>
                    <p>{formatPrice(item.price)}</p>
                    <small>Qty: {item.quantity}</small>
                  </div>

                  <button
                    className="remove-mini-item"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="mini-cart-footer">
              <div className="mini-cart-subtotal">
                <span>Subtotal:</span>
                <strong>{formatPrice(total)}</strong>
              </div>

              <button
                className="view-cart-btn"
                onClick={() => {
                  navigate("/cart");
                  onClose();
                }}
              >
                View Cart
              </button>

              <button
                className="checkout-mini-btn"
                onClick={() => {
                  if (!isLoggedIn) {
                    navigate("/login");
                  } else {
                    navigate("/checkout");
                  }
                  onClose();
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniCart;