import "./CategorySection.css";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <section className="category-section">

      <div className="category-header">
        <p>SHOP BY CATEGORY</p>
        <h2>Browse Categories</h2>
      </div>

      <div className="category-grid">

        {categories.map((category) => (

          <div
            key={category}
            className="category-card"
            onClick={() =>
              navigate(`/shop?category=${encodeURIComponent(category)}`)
            }
          >
            <h3>{category}</h3>
            <span>View Products →</span>
          </div>

        ))}

      </div>

    </section>
  );
};

export default CategorySection;