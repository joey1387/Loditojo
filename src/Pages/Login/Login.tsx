import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
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
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await loginUser(email, password);
      login(response.user, response.accessToken);
      toast.success(response.message || "Logged in successfully!");

      // Role-based post-login routing
      const role = response.user?.role;
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "seller") {
        navigate("/seller/dashboard");
      } else {
        navigate("/");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Login failed"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
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
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;