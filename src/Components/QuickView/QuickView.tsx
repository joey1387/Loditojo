import "./QuickView.css";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types/Product";

type Props = {
  product: Product;
  onClose: () => void;
};

const QuickView = ({
  product,
  onClose,
}: Props) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div
      className="quickview-overlay"
      onClick={onClose}
    >
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-modal"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
        />

        <h2>{product.name}</h2>

        <div className="quick-rating">
          <AiFillStar />
          <span>{product.rating}</span>
        </div>

        <h3>
          ₦{product.price.toLocaleString()}
        </h3>

        <p>{product.category}</p>

        <p>{product.description}</p>

        <div className="quick-buttons">
          <button
            onClick={() =>
              navigate(`/product/${product.id}`)
            }
          >
            View Details
          </button>

          <button
            onClick={() => {
              addToCart(product);
              onClose();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickView;