import "./ProductCard.css";
import { useCart } from "../../context/CartContext";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  featured: boolean;
  image: string;
};

const ProductCard = ({
  id,
  name,
  category,
  price,
  rating,
  stock,
  featured,
  image,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const navigate = useNavigate();

  return (
     <div
  className="product-card"
  onClick={() => navigate(`/product/${id}`)}
>
      <img src={image} 
      alt={name}
       />

      {featured && (
  <span className="featured-badge">
    Featured
  </span>
)}

      <div className="card-content">
        <span className="category">{category}</span>

      <h3>{name}</h3>

        <div className="rating">
          <AiFillStar />
          <span>{rating}</span>
        </div>

        <p className="price">₦{price.toLocaleString()}</p>

        <p className={stock > 0 ? "in-stock" : "out-stock"}>
          {stock > 0 ? `${stock} in stock` : "Out of stock"}
        </p>

        <button
  onClick={(e) => {
    e.stopPropagation();

    addToCart({
      key: id,
      id,
      name,
      category,
      price,
      rating,
      stock,
      featured,
      image,
    });
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