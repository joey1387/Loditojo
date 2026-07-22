import "./ProductCard.css";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";

import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
} from "react-icons/ai";

import {
  FaShoppingCart,
  FaEye,
  FaBalanceScale,
} from "react-icons/fa";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuickView from "../QuickView/QuickView";
import { Product } from "../../types/Product";

type ProductCardProps = Product & {
  brand?: string;
};

const ProductCard = (product: ProductCardProps) => {
  const {
    id,
    name,
    category,
    price,
    rating,
    stock,
    featured,
    image,
  } = product;

  const navigate = useNavigate();
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const {
    addToCompare,
    removeFromCompare,
    isInCompare,
  } = useCompare();

  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <>
      <div
        className="product-card"
        onClick={() => navigate(`/product/${id}`)}
      >
        <div className="product-image-box">
          <img src={image} alt={name} loading="lazy" />

          {featured && <span className="featured-badge">Featured</span>}

          <div className="card-actions">
            <button
              className="action-btn wishlist-btn"
              title="Wishlist"
              onClick={(e) => {
                e.stopPropagation();
                if (isInWishlist(id)) {
                  removeFromWishlist(id);
                  toast.info("Removed from Wishlist");
                } else {
                  addToWishlist(product);
                  toast.success("Added to Wishlist");
                }
              }}
            >
              {isInWishlist(id) ? <AiFillHeart className="active-heart" /> : <AiOutlineHeart />}
            </button>

            <button
              className="action-btn compare-btn"
              title="Compare"
              onClick={(e) => {
                e.stopPropagation();
                if (isInCompare(id)) {
                  removeFromCompare(id);
                  toast.info("Removed from Compare");
                } else {
                  addToCompare(product);
                  toast.success("Added to Compare");
                }
              }}
            >
              <FaBalanceScale />
            </button>

            <button
              className="action-btn quick-view-btn"
              title="Quick View"
              onClick={(e) => {
                e.stopPropagation();
                setShowQuickView(true);
              }}
            >
              <FaEye />
            </button>
          </div>
        </div>

        <div className="card-content">
          <span className="category">{category}</span>

          <h3 title={name}>{name}</h3>

          <div className="rating">
            <AiFillStar />
            <span>{rating}</span>
          </div>

          <p className="price">₦{price.toLocaleString()}</p>

          <p className={stock > 0 ? "in-stock" : "out-stock"}>
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </p>

          <button
            className="add-cart-btn"
            disabled={stock <= 0}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
              toast.success("Product added to cart!");
            }}
          >
            <FaShoppingCart />
            {stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>

      {showQuickView && (
        <QuickView product={product} onClose={() => setShowQuickView(false)} />
      )}
    </>
  );
};

export default ProductCard;