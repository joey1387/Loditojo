import "./Checkout.css";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  placeOrder,
  initializePayment,
} from "../../api/orderApi";
import { useState } from "react";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [additionalInfo, setAdditionalInfo] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState<"paystack" | "cod">("paystack");

  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 5000 : 0;

  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    try {
      if (
        !fullName ||
        !email ||
        !phone ||
        !street ||
        !city ||
        !state
      ) {
        toast.error(
          "Please complete all required fields."
        );
        return;
      }

      if (cart.length === 0) {
        toast.error("Your cart is empty.");
        return;
      }

      setLoading(true);

      const payload = {
        items: cart.map((item) => ({
          product: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),

        shippingAddress: {
          street,
          city,
          state,
          country: "Nigeria",
        },

        paymentMethod,
      };

      // STEP 1: Create Order
      const orderResponse =
        await placeOrder(payload);

      const order =
        orderResponse.order || orderResponse.data;

      if (!order?._id) {
        throw new Error(
          "Order ID was not returned from server."
        );
      }

      // STEP 2: Cash on Delivery
      if (paymentMethod === "cod") {
        toast.success(
          "Order placed successfully!"
        );

        clearCart();

        navigate("/success");

        return;
      }

      // STEP 3: Initialize Paystack
      const payment =
        await initializePayment(order._id);

      const paymentUrl =
        payment.data?.paymentUrl ||
        payment.paymentUrl;

      if (!paymentUrl) {
        throw new Error(
          "Payment URL was not returned."
        );
      }

      // STEP 4: Redirect to Paystack
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
        {/* LEFT */}
        <div className="checkout-left">
          <div className="checkout-card">
            <h2>Delivery Information</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Street Address"
              value={street}
              onChange={(e) =>
                setStreet(e.target.value)
              }
            />

            <div className="double-input">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) =>
                  setCity(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) =>
                  setState(e.target.value)
                }
              />
            </div>

            <input
              type="text"
              value="Nigeria"
              readOnly
            />

            <textarea
              placeholder="Additional Information"
              value={additionalInfo}
              onChange={(e) =>
                setAdditionalInfo(
                  e.target.value
                )
              }
            />
          </div>

          <div className="checkout-card">
            <h2>Payment Method</h2>

            <label>
              <input
                type="radio"
                checked={
                  paymentMethod === "paystack"
                }
                onChange={() =>
                  setPaymentMethod("paystack")
                }
              />
              Paystack
            </label>

            <label>
              <input
                type="radio"
                disabled
              />
              Flutterwave (Coming Soon)
            </label>

            <label>
              <input
                type="radio"
                checked={
                  paymentMethod === "cod"
                }
                onChange={() =>
                  setPaymentMethod("cod")
                }
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
                key={item.id}
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
                    ₦
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}

            <hr />

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                ₦{subtotal.toLocaleString()}
              </strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>

              <strong>
                ₦{shipping.toLocaleString()}
              </strong>
            </div>

            <div className="summary-row total">
              <span>Total</span>

              <strong>
                ₦{total.toLocaleString()}
              </strong>
            </div>

            <button
              className="place-order"
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : paymentMethod ===
                  "paystack"
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