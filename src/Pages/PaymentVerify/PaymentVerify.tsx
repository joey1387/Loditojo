import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { verifyPayment } from "../../api/orderApi";
import { useCart } from "../../context/CartContext";

const PaymentVerify = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const { clearCart } = useCart();

  useEffect(() => {
    const verify = async () => {
      try {
        const reference =
          searchParams.get("reference");

        if (!reference) {
          toast.error("Payment reference missing.");

          navigate("/checkout");

          return;
        }

        const response =
          await verifyPayment(reference);

        if (response.success) {
          clearCart();

          toast.success(
            "Payment verified successfully!"
          );

          navigate("/success");
        } else {
          toast.error(
            response.message ||
              "Payment verification failed."
          );

          navigate("/checkout");
        }
      } catch (error: any) {
        console.error(error);

        toast.error(
          error?.response?.data?.message ||
            "Unable to verify payment."
        );

        navigate("/checkout");
      }
    };

    verify();
  }, [navigate, searchParams, clearCart]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        flexDirection: "column",
      }}
    >
      <h2>Verifying Payment...</h2>

      <p>Please wait.</p>
    </div>
  );
};

export default PaymentVerify;