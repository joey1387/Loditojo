import "./VerifyOTP.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const VerifyOTP = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Backend will verify OTP here later
    navigate("/login");
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
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit">
            Verify OTP
          </button>

          <p className="switch-auth">
            Didn't receive the code?
            <Link to="#"> Resend OTP</Link>
          </p>

        </form>

      </div>

    </section>
  );
};

export default VerifyOTP;