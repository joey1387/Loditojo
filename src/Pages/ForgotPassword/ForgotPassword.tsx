import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="auth-page">

      <div className="auth-card">

        <h1>Forgot Password</h1>

        <p>
          Enter your email to receive a verification code.
        </p>

        <form className="auth-form">

          <input
            type="email"
            placeholder="Email Address"
          />

          <button>
            Send OTP
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