import "./VerifyOTP.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Missing email address. Please register again.");
      return navigate("/register");
    }

    try {
      setLoading(true);

      const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_BASE}/api/auth/otp/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          purpose: "email-verification",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed");
      }

      toast.success(data.message || "Email verified successfully!");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!email) {
      toast.error("No email associated with this session.");
      return;
    }

    try {
      const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_BASE}/api/auth/otp/resend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          purpose: "email-verification",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to resend OTP");
      }

      toast.success(data.message || "New OTP sent to your email!");
    } catch (error: any) {
      toast.error(error.message || "Failed to resend code");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Verify Email</h1>
        <p>
          Enter the 6-digit code sent to <strong>{email || "your email"}</strong>.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <p className="switch-auth">
            Didn't receive the code?{" "}
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleResendOTP();
              }}
            >
              Resend OTP
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default VerifyOTP;