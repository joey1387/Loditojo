import "./EditProfile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    address: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        const data = await response.json();
        const user = data.user ?? data;

        setFormData({
          name: user.name || "",
          phone: user.phone || "",
          gender: user.gender || "",
          address: typeof user.address === "string" 
            ? user.address 
            : user.address ? `${user.address.street || ""}, ${user.address.city || ""}, ${user.address.state || ""}, ${user.address.country || ""}`.replace(/^, |, $/g, "") : "",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSaving(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/update-profile`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("Profile updated successfully");
      navigate("/profile");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  return (
    <section className="edit-profile-page">
      <div className="edit-profile-card">
        <h1>Edit Profile</h1>

        <form onSubmit={handleSubmit} className="edit-profile-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
          />

          <div className="edit-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;