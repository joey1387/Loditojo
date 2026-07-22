import "./FilterBar.css";
import { FaSlidersH, FaTimes, FaSortAmountDown } from "react-icons/fa";

type Props = {
  category: string;
  setCategory: (category: string) => void;
  priceRange: number;
  setPriceRange: (price: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  categories: string[];
  maxPrice: number;
  resetFilters: () => void;
};

const FilterBar = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  categories,
  maxPrice,
  resetFilters,
}: Props) => {
  return (
    <div className="filter-bar">
      <div className="filter-header">
        <div className="filter-title">
          <FaSlidersH />
          <span>Filters & Sorting</span>
        </div>

        <button
          className="reset-btn"
          onClick={resetFilters}
          title="Reset all filters"
        >
          <FaTimes /> Reset
        </button>
      </div>

      <div className="filter-group-container">
        {/* Categories */}
        <div className="filter-group">
          <label>Category</label>
          <div className="category-pills">
            <button
              className={`pill ${category === "All" ? "active" : ""}`}
              onClick={() => setCategory("All")}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                className={`pill ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Max Price Range */}
        <div className="filter-group price-group">
          <div className="price-label-row">
            <label>Max Price</label>
            <span className="price-value">₦{priceRange.toLocaleString()}</span>
          </div>

          <input
            type="range"
            min={0}
            max={maxPrice}
            step={5000}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="price-slider"
          />
        </div>

        {/* Sort Select */}
        <div className="filter-group sort-group">
          <label>
            <FaSortAmountDown /> Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;