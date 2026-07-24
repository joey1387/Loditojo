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
        const reference = searchParams.get("reference");

        if (!reference) {
          toast.error("Payment reference missing.");
          navigate("/checkout");
          return;
        }

        const response = await verifyPayment(reference);
        const success =
          response.success || response.status === "success";

        if (success) {
          clearCart();
          toast.success("Payment verified successfully!");
          navigate("/success");
        } else {
          toast.error(
            response.message || "Payment verification failed."
          );
          navigate("/checkout");
        }
      } catch (error: any) {
        console.error(error);
        toast.error(
          error?.response?.data?.message || "Unable to verify payment."
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
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div
        className="spinner"
        style={{
          width: "44px",
          height: "44px",
          border: "4px solid #e5e7eb",
          borderTopColor: "#6c2bd9",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
          marginBottom: "16px",
        }}
      ></div>
      <h2 style={{ fontSize: "1.5rem", color: "#111827", margin: "0 0 8px" }}>
        Verifying Payment...
      </h2>
      <p style={{ color: "#6b7280", margin: 0 }}>
        Please wait while we confirm your transaction.
      </p>
    </div>
  );
};

export default PaymentVerify;