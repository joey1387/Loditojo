import "./Checkout.css";
import { useCart } from "../../context/CartContext";
import { useCurrency } from "../../context/CurrencyContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { placeOrder, initializePayment } from "../../api/orderApi";
import { useState } from "react";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { currency, formatPrice } = useCurrency();
  const navigate = useNavigate();

  // Normalize active currency check
  const activeCurrency = String(currency || "NGN").toUpperCase();
  const isNigeria = activeCurrency === "NGN";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState(isNigeria ? "Nigeria" : "");

  const [additionalInfo, setAdditionalInfo] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "cod">("paystack");
  const [loading, setLoading] = useState(false);

  // Delivery Rates (in base NGN units)
  const ENUGU_PER_ITEM_RATE = 2000;
  const OTHER_STATE_PER_ITEM_RATE = 5000;
  const INTERNATIONAL_FLAT_SHIPPING = 15000;

  // Subtotal for items
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Total quantity of all items in cart
  const totalItemCount = cart.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // Hidden delivery rate calculation logic
  const isEnugu =
    state.trim().toLowerCase() === "enugu" ||
    state.trim().toLowerCase() === "enugu state";

  const getShippingFee = (): number => {
    if (!isNigeria) {
      return INTERNATIONAL_FLAT_SHIPPING;
    }
    if (isEnugu) {
      return ENUGU_PER_ITEM_RATE * totalItemCount;
    }
    return OTHER_STATE_PER_ITEM_RATE * totalItemCount;
  };

  const shipping = getShippingFee();
  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    try {
      if (!fullName || !email || !phone || !street || !city || !state) {
        toast.error("Please complete all required fields.");
        return;
      }

      if (cart.length === 0) {
        toast.error("Your cart is empty.");
        return;
      }

      setLoading(true);

      const payload = {
        items: cart.map((item) => ({
          product: item.id || item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),

        shippingAddress: {
          fullName,
          email,
          phone,
          street,
          city,
          state,
          country: isNigeria ? "Nigeria" : country || "International",
          additionalInfo,
        },

        paymentMethod,
        shippingFee: shipping,
        totalAmount: total,
      };

      // STEP 1: Create Order via API (/api/orders)
      const orderResponse = await placeOrder(payload);
      const order = orderResponse.order || orderResponse.data || orderResponse;

      const orderId = order?._id || order?.id;

      if (!orderId) {
        throw new Error("Order ID was not returned from server.");
      }

      // STEP 2: Cash on Delivery
      if (paymentMethod === "cod") {
        toast.success("Order placed successfully!");
        clearCart();
        navigate("/success");
        return;
      }

      // STEP 3: Initialize Paystack via API (/api/payments/initialize)
      const payment = await initializePayment(orderId);
      const paymentUrl =
        payment.data?.authorization_url ||
        payment.data?.paymentUrl ||
        payment.paymentUrl;

      if (!paymentUrl) {
        throw new Error("Payment URL was not returned.");
      }

      // STEP 4: Redirect to Paystack
      clearCart();
      window.location.href = paymentUrl;
    } catch (error: any) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to place order."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="checkout-page">
      <h1>Secure Checkout</h1>

      <div className="checkout-container">
        {/* LEFT FORM */}
        <div className="checkout-left">
          <div className="checkout-card">
            <h2>Delivery Information</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <div className="double-input">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <input
                type="text"
                placeholder="State / Province / Region"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            {isNigeria ? (
              <input type="text" value="Nigeria" readOnly />
            ) : (
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            )}

            <textarea
              placeholder="Additional Information"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>

          <div className="checkout-card">
            <h2>Payment Method</h2>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "paystack"}
                onChange={() => setPaymentMethod("paystack")}
              />
              Paystack
            </label>

            <label className="payment-option disabled">
              <input type="radio" name="payment" disabled />
              Flutterwave (Coming Soon)
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="checkout-right">
          <div className="checkout-card">
            <h2>Order Summary</h2>

            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.id || item._id} className="summary-item">
                  <img src={item.image} alt={item.name} />

                  <div className="summary-item-details">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                    <p className="summary-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="summary-divider" />

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <div className="summary-row">
              <span>
                {isNigeria
                  ? "Standard Delivery"
                  : "International Flat Shipping"}
              </span>
              <strong>{formatPrice(shipping)}</strong>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <button
              className="place-order"
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : paymentMethod === "paystack"
                ? "Pay with Paystack"
                : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;