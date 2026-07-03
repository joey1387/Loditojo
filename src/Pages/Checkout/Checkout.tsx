import "./Checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Checkout = () => {

  const navigate = useNavigate();

  const { cart } = useCart();

  const [payment, setPayment] = useState("Paystack");

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 5000 : 0;

  const total = subtotal + deliveryFee;

  const handleOrder = () => {
    navigate("/success");
  };

  return (

    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="checkout-form">

          <h2>Shipping Information</h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="State"
          />

          <input
            type="text"
            placeholder="City"
          />

          <input
            type="text"
            placeholder="Delivery Address"
          />

          <textarea
            placeholder="Order Note (Optional)"
          />

        </div>

        <div className="payment-section">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

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

          <h2
            style={{ marginTop: "30px" }}
          >
            Payment Method
          </h2>

          <label>

            <input
              type="radio"
              checked={payment === "Paystack"}
              onChange={() =>
                setPayment("Paystack")
              }
            />

            Paystack

          </label>

          <label>

            <input
              type="radio"
              checked={payment === "Flutterwave"}
              onChange={() =>
                setPayment("Flutterwave")
              }
            />

            Flutterwave

          </label>

          <label>

            <input
              type="radio"
              checked={payment === "Cash"}
              onChange={() =>
                setPayment("Cash")
              }
            />

            Cash on Delivery

          </label>

          <button
            className="place-order"
            onClick={handleOrder}
          >
            Place Order
          </button>

        </div>

      </div>

    </div>

  );

};

export default Checkout;