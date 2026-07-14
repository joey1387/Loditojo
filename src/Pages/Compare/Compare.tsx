import "./Compare.css";
import { useCompare } from "../../context/CompareContext";

const Compare = () => {
  const {
    compare,
    removeFromCompare,
    clearCompare,
  } = useCompare();

  if (compare.length === 0) {
    return (
      <section className="compare-page">
        <h1>Compare Products</h1>
        <p>No products selected for comparison.</p>
      </section>
    );
  }

  return (
    <section className="compare-page">
      <div className="compare-header">
        <h1>Compare Products</h1>

        <button onClick={clearCompare}>
          Clear All
        </button>
      </div>

      <div className="compare-table">

        <div className="compare-row">
          <div className="compare-title">
            Product
          </div>

          {compare.map((product) => (
            <div
              key={product.id}
              className="compare-product"
            >
              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <button
                onClick={() =>
                  removeFromCompare(product.id)
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">
            Price
          </div>

          {compare.map((product) => (
            <div key={product.id}>
              ₦{product.price.toLocaleString()}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">
            Category
          </div>

          {compare.map((product) => (
            <div key={product.id}>
              {product.category}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">
            Rating
          </div>

          {compare.map((product) => (
            <div key={product.id}>
              ⭐ {product.rating}
            </div>
          ))}
        </div>

        <div className="compare-row">
          <div className="compare-title">
            Stock
          </div>

          {compare.map((product) => (
            <div key={product.id}>
              {product.stock}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Compare;