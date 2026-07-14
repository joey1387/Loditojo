import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee =
    subtotal > 0 ? 5000 : 0;

  const total =
    subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <AiOutlineShoppingCart size={80} />

        <h2>Your Cart is Empty</h2>

        <p>
          Looks like you haven't added any
          products yet.
        </p>

        <Link to="/shop">
          <button className="shop-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        My Cart ({cart.length})
      </h1>

      <div className="cart-container">

        <div className="cart-items">
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p>{item.category}</p>

                <h4>
                  ₦{item.price.toLocaleString()}
                </h4>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>

            <span>
              ₦{subtotal.toLocaleString()}
            </span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>

            <span>
              ₦{deliveryFee.toLocaleString()}
            </span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>

            <span>
              ₦{total.toLocaleString()}
            </span>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Cart;