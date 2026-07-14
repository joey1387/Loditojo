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

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  featured: boolean;
  image: string;
  description: string;
  specifications: any;
  reviews: any[];
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

  const [showQuickView, setShowQuickView] =
    useState(false);

  return (
    <div
      className="product-card"
      onClick={() =>
        navigate(`/product/${id}`)
      }
    >
      <div className="product-image-box">

        <img
          src={image}
          alt={name}
        />

      </div>

      {showQuickView && (
        <QuickView
          product={product as any}
          onClose={() =>
            setShowQuickView(false)
          }
        />
      )}

      <button
        className="wishlist-btn"
        onClick={(e) => {
          e.stopPropagation();

          if (isInWishlist(id)) {
            removeFromWishlist(id);

            toast.info(
              "Removed from Wishlist"
            );
          } else {
            addToWishlist(product as any);

            toast.success(
              "Added to Wishlist"
            );
          }
        }}
      >
        {isInWishlist(id) ? (
          <AiFillHeart />
        ) : (
          <AiOutlineHeart />
        )}
      </button>

      <button
        className="compare-btn"
        onClick={(e) => {
          e.stopPropagation();

          if (isInCompare(id)) {
            removeFromCompare(id);

            toast.info(
              "Removed from Compare"
            );
          } else {
            addToCompare(product as any);

            toast.success(
              "Added to Compare"
            );
          }
        }}
      >
        <FaBalanceScale />
      </button>

      <button
        className="quick-view-btn"
        onClick={(e) => {
          e.stopPropagation();
          setShowQuickView(true);
        }}
      >
        <FaEye />
      </button>

      {featured && (
        <span className="featured-badge">
          Featured
        </span>
      )}

      <div className="card-content">

        <span className="category">
          {category}
        </span>

        <h3>{name}</h3>

        <div className="rating">

          <AiFillStar />

          <span>{rating}</span>

        </div>

        <p className="price">
          ₦{price.toLocaleString()}
        </p>
                <p
          className={
            stock > 0
              ? "in-stock"
              : "out-stock"
          }
        >
          {stock > 0
            ? `${stock} in stock`
            : "Out of stock"}
        </p>

        <button
          className="add-cart-btn"
          onClick={(e) => {
            e.stopPropagation();

            addToCart(product as any);

            toast.success(
              "Product added to cart!"
            );
          }}
        >
          <FaShoppingCart />
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;