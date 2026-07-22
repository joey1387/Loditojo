import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

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
          data.message || "Failed to send OTP"
        );
      }

      alert(data.message);

      navigate("/verify-otp", {
        state: {
          email,
        },
      });
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">

        <h1>Forgot Password</h1>

        <p>
          Enter your email to receive a verification code.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send OTP"}
          </button>

          <p className="switch-auth">
            Remember your password?

            <Link to="/login">
              Login
            </Link>
          </p>

        </form>

      </div>
    </section>
  );
};

export default ForgotPassword;