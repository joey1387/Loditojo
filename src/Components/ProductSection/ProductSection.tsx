import "./ProductSection.css";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {

  const navigate = useNavigate();

  return (

    <section className="product-section">

      <div className="section-header">

        <div>

          <h2>Featured Products</h2>

          <p>
            Explore our most popular premium gadgets.
          </p>

        </div>

        <button
          className="view-all-btn"
          onClick={() => navigate("/shop")}
        >
          View All
        </button>

      </div>

      <div className="products-grid">

        {products
          .filter((product) => product.featured)
          .map((product) => (

            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              rating={product.rating}
              stock={product.stock}
              featured={product.featured}
              image={product.image}
            />

          ))}

      </div>

    </section>

  );
};

export default ProductSection;