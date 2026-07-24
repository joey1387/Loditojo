import "./Profile.css";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSignOutAlt,
  FaBoxOpen,
  FaHeart,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logout } = useAuth();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        const profileData = await response.json();

        setUser(profileData.user ?? profileData);

        const orderResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/orders`,
          {
            credentials: "include",
          }
        );

        const orderData = await orderResponse.json();

        setOrders(orderData.orders ?? orderData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="loading-page">Loading profile...</div>;
  }

  if (!user) {
    return <div className="loading-page">Failed to load profile.</div>;
  }

  const initials =
    user.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="profile-page">
      <h1 className="profile-title">My Profile</h1>

      <div className="profile-card profile-header">
        <div className="profile-avatar">{initials}</div>

        <div className="profile-user">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <small>
            Member since{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "Recently"}
          </small>
        </div>

        <button
          className="edit-btn"
          onClick={() => navigate("/edit-profile")}
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>

      <div className="profile-card">
        <h3>Personal Information</h3>

        <div className="info-grid">
          <div className="info-item">
            <FaUser />
            <div>
              <span>Name</span>
              <strong>{user.name}</strong>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>
          </div>

          <div className="info-item">
            <FaPhone />
            <div>
              <span>Phone</span>
              <strong>{user.phone || "Not Added"}</strong>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <span>Gender</span>
              <strong>{user.gender || "Not Specified"}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaBoxOpen />
          <h2>{orders.length}</h2>
          <p>Orders</p>
        </div>

        <div className="stat-card">
          <FaHeart />
          <h2>{user.wishlistCount || 0}</h2>
          <p>Wishlist</p>
        </div>

        <div className="stat-card">
          <FaStar />
          <h2>{user.reviewCount || 0}</h2>
          <p>Reviews</p>
        </div>

        <div className="stat-card">
          <FaShieldAlt />
          <h2>{user.rewardPoints || 0}</h2>
          <p>Reward Points</p>
        </div>
      </div>

      <div className="profile-card">
        <h3>Delivery Address</h3>

        <p>
          {user.address
            ? typeof user.address === "string"
              ? user.address
              : `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`
            : "No address has been added yet."}
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/edit-profile")}
        >
          {user.address ? "Edit Address" : "Add Address"}
        </button>
      </div>

      <div className="profile-card">
        <h3>Recent Orders</h3>

        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.slice(0, 3).map((order) => (
            <div className="order-item" key={order._id || order.id}>
              <span>#{(order._id || order.id)?.slice(-6)}</span>
              <span className={`status-tag ${order.status?.toLowerCase()}`}>
                {order.status}
              </span>
              <span>₦{Number(order.total || 0).toLocaleString()}</span>
            </div>
          ))
        )}
      </div>

      <div className="profile-card">
        <h3>Security</h3>

        <button
          className="secondary-btn"
          onClick={() => navigate("/forgot-password")}
        >
          Change Password
        </button>
      </div>

      <div className="profile-card">
        <button
          className="logout-btn-profile"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;