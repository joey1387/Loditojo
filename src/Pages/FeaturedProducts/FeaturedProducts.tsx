import "./FeaturedProducts.css";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {

  const featured = products.filter(
    product => product.featured
  );

  return (

    <section className="featured-products">

      <div className="featured-header">

        <div>

          <p className="section-tag">
            FEATURED COLLECTION
          </p>

          <h2>
            Best Selling Gadgets
          </h2>

        </div>

        <Link to="/shop">
          <button>
            View All
          </button>
        </Link>

      </div>

      <div className="featured-grid">

        {featured.map(product => (

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

export default FeaturedProducts;