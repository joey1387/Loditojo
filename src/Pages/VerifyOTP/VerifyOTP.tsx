import "./VerifyOTP.css";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "OTP verification failed"
        );
      }

      alert(data.message);

      navigate("/reset-password", {
        state: {
          email,
          otp,
        },
      });

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to resend OTP"
        );
      }

      alert(data.message);

    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">

        <h1>Verify Email</h1>

        <p>
          Enter the 6-digit code sent to your email.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={6}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </button>

          <p className="switch-auth">
            Didn't receive the code?

            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleResendOTP();
              }}
            >
              {" "}
              Resend OTP
            </Link>

          </p>

        </form>

      </div>
    </section>
  );
};

export default VerifyOTP;