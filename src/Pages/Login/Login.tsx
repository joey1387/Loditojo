import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="auth-page">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>
          Login to continue shopping.
        </p>

        <form className="auth-form" autoComplete="off">

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <div className="forgot-password">

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          <button>
            Login
          </button>

          <p className="switch-auth">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </form>

      </div>

    </section>
  );
};

export default Login;