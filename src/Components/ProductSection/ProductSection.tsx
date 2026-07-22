import "./ProductSection.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";

const ProductSection = () => {
  const navigate = useNavigate();

  // Show only 8 featured products on the homepage
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 8);

  return (
    <section className="product-section">
      <div className="section-top">
        <span className="section-tag">FEATURED COLLECTION</span>
        <h2>Trending Gadgets</h2>
        <p>
          Handpicked premium gadgets with unbeatable prices, top performance,
          and nationwide delivery.
        </p>
      </div>

      <div className="products-grid">
        {featuredProducts.map((product) => (
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
            description={product.description}
            specifications={product.specifications}
            reviews={product.reviews}
          />
        ))}
      </div>

      <div className="view-all-container">
        <button
          className="view-all-btn"
          onClick={() => navigate("/shop")}
        >
          View All Products →
        </button>
      </div>
    </section>
  );
};

export default ProductSection;