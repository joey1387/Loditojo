import "./CategorySection.css";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaGamepad,
  FaClock,
  FaCamera,
} from "react-icons/fa";

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "phones",
      icon: <FaMobileAlt />,
      color: "#6C2BD9",
    },
    {
      name: "laptops",
      icon: <FaLaptop />,
      color: "#2563EB",
    },
    {
      name: "accessories",
      icon: <FaHeadphones />,
      color: "#16A34A",
    },
    {
      name: "gaming",
      icon: <FaGamepad />,
      color: "#DC2626",
    },
    {
      name: "smartwatches",
      icon: <FaClock />,
      color: "#F59E0B",
    },
    {
      name: "cameras",
      icon: <FaCamera />,
      color: "#0F766E",
    },
  ];

  return (
    <section className="category-section">

      <div className="category-header">

        <p>SHOP BY CATEGORY</p>

        <h2>
          Find Your Perfect Gadget
        </h2>

      </div>

      <div className="category-grid">

        {categories.map((category) => {

          const count = products.filter(
            (p) => p.category === category.name
          ).length;

          return (

            <div
              key={category.name}
              className="category-card"
              onClick={() =>
                navigate(
                  `/shop?category=${category.name}`
                )
              }
            >

              <div
                className="category-icon"
                style={{
                  background: category.color,
                }}
              >
                {category.icon}
              </div>

              <h3>
                {category.name}
              </h3>

              <p>
                {count} Products
              </p>

            </div>

          );
        })}

      </div>

    </section>
  );
};

export default CategorySection;