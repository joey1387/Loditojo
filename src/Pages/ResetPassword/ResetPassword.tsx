import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    navigate("/login");

  };

  return (

    <section className="auth-page">

      <div className="auth-card">

        <h1>Create New Password</h1>

        <p>
          Choose a secure password.
        </p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>

    </section>

  );
};

export default ResetPassword;