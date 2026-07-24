import "./Compare.css";
import { useNavigate } from "react-router-dom";
import { useCompare } from "../../context/CompareContext";
import { useCart } from "../../context/CartContext";
import { useCurrency } from "../../context/CurrencyContext";
import { AiFillStar } from "react-icons/ai";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Compare = () => {
  const navigate = useNavigate();
  const { compare, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  if (compare.length === 0) {
    return (
      <section className="compare-page">
        <div className="empty-compare">
          <h1>Compare Products</h1>
          <p>You haven't added any products for comparison yet.</p>
          <button onClick={() => navigate("/shop")}>Continue Shopping</button>
        </div>
      </section>
    );
  }

  return (
    <section className="compare-page">
      <div className="compare-header">
        <div>
          <h1>Compare Products</h1>
          <p>
            Compare specifications, prices, ratings and stock before making
            your decision.
          </p>
        </div>

        <button className="clear-btn" onClick={clearCompare}>
          <FaTrash />
          Clear All
        </button>
      </div>

      <div className="compare-table">
        <div className="compare-row">
          <div className="compare-title">Product</div>
          {compare.map((product) => (
            <div key={product.id} className="compare-product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>

              <div className="compare-rating">
                <AiFillStar />
                <span>{product.rating}</span>
              </div>

              <button
                className="compare-cart-btn"
                onClick={() => addToCart(product)}
              >
                <FaShoppingCart />
                Add to Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => removeFromCompare(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Price</div>
          {compare.map((product) => (
            <div key={product.id}>
              {formatPrice(product.price)}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Brand</div>
          {compare.map((product) => (
            <div key={product.id}>
              {product.specifications?.brand || "N/A"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Model</div>
          {compare.map((product) => (
            <div key={product.id}>
              {product.specifications?.model || "N/A"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Color</div>
          {compare.map((product) => (
            <div key={product.id}>
              {product.specifications?.color || "N/A"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Storage</div>
          {compare.map((product) => (
            <div key={product.id}>
              {product.specifications?.storage || "N/A"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Display</div>
          {compare.map((product) => (
            <div key={product.id}>
              {product.specifications?.display || "N/A"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Battery</div>
          {compare.map((product) => (
            <div key={product.id}>
              {product.specifications?.battery || "N/A"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Warranty</div>
          {compare.map((product) => (
            <div key={product.id}>
              {product.specifications?.warranty || "N/A"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Category</div>
          {compare.map((product) => (
            <div key={product.id}>{product.category}</div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Stock</div>
          {compare.map((product) => (
            <div
              key={product.id}
              className={product.stock > 0 ? "stock-green" : "stock-red"}
            >
              {product.stock > 0
                ? `${product.stock} Available`
                : "Out of Stock"}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">Rating</div>
          {compare.map((product) => (
            <div key={product.id}>
              <div className="rating-display">
                <AiFillStar />
                <span>{product.rating}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compare;