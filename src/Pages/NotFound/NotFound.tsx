import "./NotFound.css";
import { useNavigate } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <FaExclamationTriangle className="not-found-icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for doesn't exist or has been moved to a new address.
        </p>
        <button className="primary-btn" onClick={() => navigate("/")}>
          <FaHome /> Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;