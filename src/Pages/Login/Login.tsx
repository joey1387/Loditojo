import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../api/authApi";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import {
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Check if user was redirected from a protected route
  const from = location.state?.from?.pathname;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const cleanEmail = email.trim();
      const response = await loginUser(cleanEmail, password);
      
      login(response.user, response.accessToken);
      toast.success(response.message || "Logged in successfully!");

      // Role-based post-login routing with fallback to previous path
      const role = response.user?.role;
      if (role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else if (role === "seller") {
        navigate("/seller/dashboard", { replace: true });
      } else {
        navigate(from || "/", { replace: true });
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue shopping.
        </p>

        <form
          className="auth-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/* Email Field */}
          <div className="input-field">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="input-field">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button
            className="submit-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="switch-auth">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;