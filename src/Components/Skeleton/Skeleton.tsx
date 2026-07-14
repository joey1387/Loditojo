import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>

      <div className="skeleton-line short"></div>

      <div className="skeleton-line"></div>

      <div className="skeleton-line price"></div>

      <div className="skeleton-button"></div>
    </div>
  );
};

export default Skeleton;