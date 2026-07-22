import "./Settings.css";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaTrashAlt,
} from "react-icons/fa";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";

const Settings = () => {
  const { user } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log({ currentPassword, newPassword });
  };

  const handleDeleteAccount = async () => {
    console.log("Delete account");
  };

  return (
    <section className="settings-page">
      <h1>Settings</h1>

      {/* ACCOUNT */}
      <div className="settings-card">
        <h2>Account Information</h2>

        <form onSubmit={handleProfileUpdate}>
          <div className="input-group">
            <FaUser className="input-lead-icon" />
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-lead-icon" />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="primary-btn">
            Save Changes
          </button>
        </form>
      </div>

      {/* PASSWORD */}
      <div className="settings-card">
        <h2>Change Password</h2>

        <form onSubmit={handlePasswordChange}>
          <div className="input-group">
            <FaLock className="input-lead-icon" />

            <div className="password-field">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                aria-label={
                  showCurrentPassword
                    ? "Hide current password"
                    : "Show current password"
                }
              >
                {showCurrentPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="input-group">
            <FaLock className="input-lead-icon" />

            <div className="password-field">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label={
                  showNewPassword
                    ? "Hide new password"
                    : "Show new password"
                }
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="input-group">
            <FaLock className="input-lead-icon" />

            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Update Password
          </button>
        </form>
      </div>

      {/* DANGER ZONE */}
      <div className="settings-card danger-card">
        <h2>Danger Zone</h2>

        <p>Deleting your account is permanent and cannot be undone.</p>

        <button
          type="button"
          className="danger-btn"
          onClick={() => setShowDeleteModal(true)}
        >
          <FaTrashAlt />
          Delete My Account
        </button>
      </div>

      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <h3>Delete Account?</h3>
            <p>This action cannot be undone.</p>

            <div className="modal-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="danger-btn"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Settings;