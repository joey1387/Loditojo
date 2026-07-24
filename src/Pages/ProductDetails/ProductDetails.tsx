import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { useCurrency } from "../../context/CurrencyContext";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { toast } from "react-toastify";

import {
  saveRecentlyViewed,
  getRecentlyViewed,
} from "../../utils/recentlyViewed";

import { reviewService } from "../../services/api";
import {
  getProductById,
  getRelatedProducts,
} from "../../api/productApi";

import { Product } from "../../types/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  const [reviews, setReviews] = useState<any[]>([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return;
        setLoading(true);

        const data = await getProductById(id);

        const formatted: Product = {
          id: data._id || data.id,
          name: data.name,
          category: data.category?.name || data.category || "",
          price: data.basePrice || data.price,
          rating: data.ratings?.average || data.rating || 0,
          stock: data.stock,
          featured: data.isFeatured || data.featured,
          image: data.images?.[0] || data.image || "",
          images: data.images || [data.image],
          description: data.description,
          specifications: data.specs || data.specifications || {},
          reviews: data.reviews || [],
        };

        setProduct(formatted);
        setSelectedImage(formatted.image);

        saveRecentlyViewed(String(formatted.id));

        // Fetch Live Reviews from Backend API (/api/reviews/product/:productId)
        try {
          const reviewData = await reviewService.getProductReviews(String(formatted.id));
          setReviews(reviewData.reviews || reviewData || []);
        } catch (revErr) {
          console.error("Failed to load backend reviews:", revErr);
          setReviews(formatted.reviews || []);
        }

        const related = await getRelatedProducts(id);

        const formattedRelated = related.map((item: any) => ({
          id: item._id || item.id,
          name: item.name,
          category: item.category?.name || item.category || "",
          price: item.basePrice || item.price,
          rating: item.ratings?.average || item.rating || 0,
          stock: item.stock,
          featured: item.isFeatured || item.featured,
          image: item.images?.[0] || item.image || "",
          images: item.images || [item.image],
          description: item.description,
          specifications: item.specs || item.specifications || {},
          reviews: [],
        }));

        setRelatedProducts(formattedRelated);
        setRecentProducts(
          getRecentlyViewed([formatted, ...formattedRelated])
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="product-details-loading">
        <div className="spinner"></div>
        <h2>Loading Product Details...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-details-empty">
        <h2>Product not found.</h2>
        <button onClick={() => navigate("/shop")}>Back to Shop</button>
      </div>
    );
  }

  const submitReview = async () => {
    if (!reviewName.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!reviewComment.trim()) {
      toast.error("Please enter your review.");
      return;
    }

    try {
      // Post Review to API (/api/reviews/product/:productId)
      await reviewService.addReview(String(product.id), {
        name: reviewName,
        rating: reviewRating,
        comment: reviewComment,
      });

      // Refetch updated reviews list
      const reviewData = await reviewService.getProductReviews(String(product.id));
      setReviews(reviewData.reviews || reviewData || []);

      setReviewComment("");
      setReviewName("");
      setReviewRating(5);
      toast.success("Review submitted successfully!");
    } catch (error: any) {
      console.error(error);
      const message = error.response?.data?.message || "Unable to submit review.";
      toast.error(message);
    }
  };

  return (
    <div className="product-details-page">
      <section className="product-details">
        <div className="product-image">
          <img
            className="main-product-image"
            src={selectedImage || product.image}
            alt={product.name}
          />

          <div className="thumbnail-images">
            {(product.images.length
              ? product.images
              : [product.image, product.image, product.image]
            ).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name}-${index}`}
                className={selectedImage === image ? "active-thumbnail" : ""}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <span className="product-category">
            {product.category.toUpperCase()}
          </span>

          <h1>{product.name}</h1>

          <div className="product-rating">
            <AiFillStar className="star-icon" />
            <span>{product.rating}</span>
            <small>({reviews.length} reviews)</small>
          </div>

          <h2>{formatPrice(product.price)}</h2>

          <p className="description-text">{product.description}</p>

          <p className={product.stock > 0 ? "in-stock" : "out-stock"}>
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>

          {Object.keys(product.specifications || {}).length > 0 && (
            <div className="specifications-card">
              <h3>Specifications</h3>
              <div className="spec-grid">
                {Object.entries(product.specifications || {}).map(
                  ([key, value]) => (
                    <div key={key}>
                      <span>{key}</span>
                      <strong>{String(value)}</strong>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          <div className="quantity-section">
            <h4>Quantity</h4>
            <div className="quantity-box">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="product-buttons">
            <button
              className="add-cart"
              disabled={product.stock <= 0}
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
                toast.success(`Added ${quantity} item(s) to cart`);
              }}
            >
              Add to Cart
            </button>

            <button
              className="buy-now"
              disabled={product.stock <= 0}
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
                navigate("/checkout");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>Customer Reviews ({reviews.length})</h2>

        <div className="review-form">
          <h3>Leave a Review</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
          />

          <select
            value={reviewRating}
            onChange={(e) => setReviewRating(Number(e.target.value))}
          >
            <option value={5}>★★★★★ (5)</option>
            <option value={4}>★★★★☆ (4)</option>
            <option value={3}>★★★☆☆ (3)</option>
            <option value={2}>★★☆☆☆ (2)</option>
            <option value={1}>★☆☆☆☆ (1)</option>
          </select>

          <textarea
            rows={4}
            placeholder="Write your review..."
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
          />

          <button className="submit-review-btn" onClick={submitReview}>
            Submit Review
          </button>
        </div>

        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={review._id || review.id || index} className="review-card">
                <h4>{review.name || review.user?.name || "Anonymous User"}</h4>
                <div className="review-rating">
                  {"★".repeat(review.rating || 5)}
                </div>
                <p>{review.comment}</p>
                <small>
                  {review.createdAt
                    ? new Date(review.createdAt).toLocaleDateString()
                    : review.date || "Recently"}
                </small>
              </div>
            ))
          ) : (
            <p className="no-reviews">No reviews yet. Be the first to review!</p>
          )}
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="section-header">
            <h2>You May Also Like</h2>
          </div>
          <div className="related-grid">
            {relatedProducts.slice(0, 4).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      {recentProducts.filter((item) => item.id !== product.id).length > 0 && (
        <section className="related-products">
          <div className="section-header">
            <h2>Recently Viewed</h2>
          </div>
          <div className="related-grid">
            {recentProducts
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;