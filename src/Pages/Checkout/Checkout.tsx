import "./Checkout.css";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

 const subtotal = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  const shipping = subtotal > 0 ? 5000 : 0;

  const total = subtotal + shipping;

  return (
    <section className="checkout-page">

      <h1>Secure Checkout</h1>

      <div className="checkout-container">

        {/* LEFT */}

        <div className="checkout-left">

          <div className="checkout-card">

            <h2>Delivery Information</h2>

            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="tel" placeholder="Phone Number" />

            <input type="text" placeholder="Street Address" />

            <div className="double-input">

              <input type="text" placeholder="City" />

              <input type="text" placeholder="State" />

            </div>

                <input
                  type="text"
                  defaultValue="Nigeria"
                  readOnly
                />

            <textarea placeholder="Additional Information"></textarea>

          </div>

          <div className="checkout-card">

            <h2>Payment Method</h2>

            <label>
              <input
                type="radio"
                name="payment"
                defaultChecked
              />
              Paystack
            </label>

            <label>
              <input
                type="radio"
                name="payment"
              />
              Flutterwave
            </label>

            <label>
              <input
                type="radio"
                name="payment"
              />
              Cash on Delivery
            </label>

          </div>

        </div>

        {/* RIGHT */}

        <div className="checkout-right">

          <div className="checkout-card">

            <h2>Order Summary</h2>

            {cart.map((item) => (

              <div
                key={item.key}
                className="summary-item"
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                 <h4>{item.name}</h4>

                    <p>
                      Qty: {item.quantity}
                    </p>

                    <p>
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>

                </div>

              </div>

            ))}

            <hr />

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₦{subtotal.toLocaleString()}</strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <strong>₦{shipping.toLocaleString()}</strong>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <strong>₦{total.toLocaleString()}</strong>
            </div>

           <button
  className="place-order"
  onClick={() => {

    toast.success("Order placed successfully!");

clearCart();

navigate("/success");
  }}
>
  Place Order
</button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Checkout;