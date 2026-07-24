import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface Props {
  role: "admin" | "seller";
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ role, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adminNav = [
    { label: "Overview", path: "/admin/dashboard", icon: "📊" },
    { label: "Pending Sellers", path: "/admin/sellers", icon: "⏳" },
    { label: "All Users", path: "/admin/users", icon: "👥" },
    { label: "Products", path: "/admin/products", icon: "📦" },
  ];

  const sellerNav = [
    { label: "Overview", path: "/seller/dashboard", icon: "📈" },
    { label: "My Products", path: "/seller/products", icon: "🏷️" },
    { label: "Orders", path: "/seller/orders", icon: "🚚" },
    { label: "Analytics", path: "/seller/analytics", icon: "📊" },
  ];

  const navItems = role === "admin" ? adminNav : sellerNav;

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa", fontFamily: "sans-serif" }}>
      {/* Sidebar - Added flex column for marginTop: "auto" button positioning */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#1e1b4b",
          color: "#fff",
          padding: "20px 15px",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30px", color: "#c084fc" }}>
          Loditojo {role === "admin" ? "Admin" : "Seller"}
        </h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, overflowY: "auto" }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  color: isActive ? "#fff" : "#a78bfa",
                  backgroundColor: isActive ? "#6b21a8" : "transparent",
                  textDecoration: "none",
                  fontWeight: isActive ? "600" : "normal",
                  transition: "background-color 0.2s ease",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "auto",
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#3730a3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          ← Return to Store
        </button>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "30px", overflowY: "auto" }}>{children}</main>
    </div>
  );
};

// Added default export to support both default and named imports
export default DashboardLayout;