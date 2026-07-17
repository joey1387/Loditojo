import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

import {
  saveRecentlyViewed,
  getRecentlyViewed,
} from "../../utils/recentlyViewed";

import {
  getReviews,
  saveReviews,
} from "../../utils/reviewStorage";

import {
  getProductById,
  getRelatedProducts,
} from "../../api/productApi";

import { Product } from "../../types/Product";

const ProductDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] =
    useState<Product | null>(null);

  const [relatedProducts, setRelatedProducts] =
    useState<Product[]>([]);

  const [recentProducts, setRecentProducts] =
    useState<Product[]>([]);

  const [selectedImage, setSelectedImage] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [reviews, setReviews] =
    useState<any[]>([]);

  const [reviewName, setReviewName] =
    useState("");

  const [reviewComment, setReviewComment] =
    useState("");

  const [reviewRating, setReviewRating] =
    useState(5);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return;

        setLoading(true);

        const data = await getProductById(id);

        const formatted: Product = {
          id: Number(data._id),
          name: data.name,
          category: data.category?.name || "",
          price: data.basePrice,
          rating: data.ratings?.average || 0,
          stock: data.stock,
          featured: data.isFeatured,
          image: data.images?.[0] || "",
          images: data.images || [],
          description: data.description,
          specifications: data.specs || {},
          reviews: [],
        };

        setProduct(formatted);

        setSelectedImage(formatted.image);

        saveRecentlyViewed(String(formatted.id));

        setReviews(
          getReviews(
            formatted.id,
            formatted.reviews
          )
        );

        const related =
          await getRelatedProducts(id);

        const formattedRelated =
          related.map((item: any) => ({
            id: Number(item._id),
            name: item.name,
            category:
              item.category?.name || "",
            price: item.basePrice,
            rating:
              item.ratings?.average || 0,
            stock: item.stock,
            featured:
              item.isFeatured,
            image:
              item.images?.[0] || "",
            images:
              item.images || [],
            description:
              item.description,
            specifications:
              item.specs || {},
            reviews: [],
          }));

        setRelatedProducts(
          formattedRelated
        );

        setRecentProducts(
          getRecentlyViewed([
            formatted,
            ...formattedRelated,
          ])
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
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  const submitReview = () => {
    if (
      !reviewName.trim() ||
      !reviewComment.trim()
    )
      return;

    const newReview = {
      id: Date.now(),
      name: reviewName,
      rating: reviewRating,
      comment: reviewComment,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [
      newReview,
      ...reviews,
    ];

    setReviews(updatedReviews);

    saveReviews(
      product.id,
      updatedReviews
    );

    setReviewName("");
    setReviewComment("");
    setReviewRating(5);
  };

  return (
    <>
      <section className="product-details">

        <div className="product-image">

          <img
            className="main-product-image"
            src={
              selectedImage ||
              product.image
            }
            alt={product.name}
          />

          <div className="thumbnail-images">

            {(product.images.length
              ? product.images
              : [
                  product.image,
                  product.image,
                  product.image,
                  product.image,
                ]).map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name}-${index}`}
                  className={
                    selectedImage === image
                      ? "active-thumbnail"
                      : ""
                  }
                  onClick={() =>
                    setSelectedImage(image)
                  }
                />
              )
            )}

          </div>

        </div>

        <div className="product-info">

          <span className="product-category">
            {product.category.toUpperCase()}
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

          <p
            className={
              product.stock > 0
                ? "in-stock"
                : "out-stock"
            }
          >
            {product.stock > 0
              ? `${product.stock} in stock`
              : "Out of stock"}
          </p>

          <div className="specifications-card">

            <h3>Specifications</h3>

            <div className="spec-grid">

              {Object.entries(
                product.specifications || {}
              ).map(([key, value]) => (

                <div key={key}>

                  <span>{key}</span>

                  <strong>
                    {String(value)}
                  </strong>

                </div>

              ))}

            </div>

          </div>
                    <div className="quantity-section">

            <h4>Quantity</h4>

            <div className="quantity-box">

              <button
                onClick={() =>
                  setQuantity((q) =>
                    Math.max(1, q - 1)
                  )
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
                for (
                  let i = 0;
                  i < quantity;
                  i++
                ) {
                  addToCart(product);
                }
              }}
            >
              Add to Cart
            </button>

            <button
              className="buy-now"
              onClick={() => {
                for (
                  let i = 0;
                  i < quantity;
                  i++
                ) {
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

        <h2>
          Customer Reviews ({reviews.length})
        </h2>

        <div className="review-form">

          <h3>Leave a Review</h3>

          <input
            type="text"
            placeholder="Your Name"
            value={reviewName}
            onChange={(e) =>
              setReviewName(e.target.value)
            }
          />

          <select
            value={reviewRating}
            onChange={(e) =>
              setReviewRating(
                Number(e.target.value)
              )
            }
          >
            <option value={5}>
              ★★★★★ (5)
            </option>

            <option value={4}>
              ★★★★☆ (4)
            </option>

            <option value={3}>
              ★★★☆☆ (3)
            </option>

            <option value={2}>
              ★★☆☆☆ (2)
            </option>

            <option value={1}>
              ★☆☆☆☆ (1)
            </option>

          </select>

          <textarea
            rows={4}
            placeholder="Write your review..."
            value={reviewComment}
            onChange={(e) =>
              setReviewComment(
                e.target.value
              )
            }
          />

          <button
            className="submit-review-btn"
            onClick={submitReview}
          >
            Submit Review
          </button>

        </div>

        {reviews.map(
          (review, index) => (

            <div
              key={review.id || index}
              className="review-card"
            >

              <h4>{review.name}</h4>

              <div className="review-rating">
                {"⭐".repeat(review.rating)}
              </div>

              <p>{review.comment}</p>

              <small>{review.date}</small>

            </div>

          )
        )}

      </section>
            <section className="related-products">

        <div className="section-header">

          <h2>You May Also Like</h2>

        </div>

        <div className="related-grid">

          {relatedProducts.length > 0 ? (

            relatedProducts
              .slice(0, 4)
              .map((item) => (

                <ProductCard
                  key={item.id}
                  {...item}
                />

              ))

          ) : (

            <p>No related products.</p>

          )}

        </div>

      </section>

      <section className="related-products">

        <div className="section-header">

          <h2>Recently Viewed</h2>

        </div>

        <div className="related-grid">

          {recentProducts
            .filter(
              (item) =>
                item.id !== product.id
            )
            .slice(0, 4)
            .map((item) => (

              <ProductCard
                key={item.id}
                {...item}
              />

            ))}

        </div>

      </section>

    </>
  );
};

export default ProductDetails;