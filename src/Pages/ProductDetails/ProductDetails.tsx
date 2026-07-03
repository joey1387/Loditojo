import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { AiFillStar } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (p) => p.id === Number(id)
  );
  const relatedProducts = products.filter(
  (p) =>
    p.category === product?.category &&
    p.id !== product?.id
);

  if (!product) {
    return <h2>Product not found.</h2>;
  }

 return (
  <>

    <section className="product-details">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <div className="product-rating">
          <AiFillStar />
          <span>{product.rating}</span>
        </div>

        <h2>
          ₦{product.price.toLocaleString()}
        </h2>

        <p>{product.description}</p>

        <p className="stock">
          {product.stock > 0
            ? `${product.stock} in stock`
            : "Out of stock"}
        </p>
            <div className="quantity-section">

  <h4>Quantity</h4>

  <div className="quantity-box">

    <button
      onClick={() =>
        setQuantity((q) => Math.max(1, q - 1))
      }
    >
      -
    </button>

    <span>{quantity}</span>

    <button
      onClick={() =>
        setQuantity((q) => q + 1)
      }
    >
      +
    </button>

  </div>

</div>
        <div className="product-buttons">

          <button
            className="add-cart"
            onClick={() => {
  for (let i = 0; i < quantity; i++) {
    addToCart({
      key: product.id,
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      rating: product.rating,
      stock: product.stock,
      featured: product.featured,
      image: product.image,
    });
  }
}}
          >
            Add to Cart
          </button>

          <button className="buy-now">
            Buy Now
          </button>

        </div>

      </div>

    </section>

    <section className="reviews-section">

      <h2>Customer Reviews</h2>

      {product.reviews.length > 0 ? (

        product.reviews.map((review, index) => (

          <div
            key={index}
            className="review-card"
          >

            <h4>{review.name}</h4>

            <div className="review-rating">
              ⭐ {review.rating}/5
            </div>

            <p>{review.comment}</p>

            <small>{review.date}</small>

          </div>

        ))

      ) : (

        <p>No reviews yet.</p>

      )}

    </section>
<section className="related-products">

  <div className="section-header">

    <h2>You May Also Like</h2>

    <p>
      More products in this category
    </p>

  </div>

  <div className="related-grid">

    {relatedProducts.map((item) => (

      <ProductCard
        key={item.id}
        id={item.id}
        name={item.name}
        category={item.category}
        price={item.price}
        rating={item.rating}
        stock={item.stock}
        featured={item.featured}
        image={item.image}
      />

    ))}

  </div>

</section>
  </>
);
};

export default ProductDetails;