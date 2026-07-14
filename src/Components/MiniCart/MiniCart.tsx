import "./MiniCart.css";
import { useCart } from "../../context/CartContext";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

const MiniCart = ({ open, onClose }: Props) => {
  const { cart } = useCart();

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`mini-cart-overlay ${
        open ? "show" : ""
      }`}
      onClick={onClose}
    >
      <div
        className="mini-cart"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mini-cart-header">
          <h2>Your Cart</h2>

          <FaTimes
            onClick={onClose}
            className="close-cart"
          />
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                className="mini-cart-item"
             key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>

                  <p>
                    ₦
                    {item.price.toLocaleString()}
                  </p>

                  <small>
                    Qty: {item.quantity}
                  </small>
                </div>
              </div>
            ))}

            <div className="mini-cart-footer">
              <h3>
                ₦{total.toLocaleString()}
              </h3>

              <button
                onClick={() => {
                  navigate("/cart");
                  onClose();
                }}
              >
                View Cart
              </button>

              <button
                onClick={() => {
                  navigate("/checkout");
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