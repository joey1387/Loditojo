import "./SearchBar.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/Product";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>> | ((val: any) => void);
  products?: Product[];
};

const SearchBar = ({ search, setSearch, products = [] }: Props) => {
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      setShowSuggestions(false);
      navigate(`/shop?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search for gadgets..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onFocus={() => {
          if (search) setShowSuggestions(true);
        }}
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => {
            setSearch("");
            setShowSuggestions(false);
          }}
          aria-label="Clear search"
          type="button"
        >
          <FaTimes />
        </button>
      )}

      {search && showSuggestions && (
        <div className="search-suggestions">
          {suggestions.length > 0 ? (
            suggestions.map((product) => (
              <div
                key={product.id}
                className="suggestion-item"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  setSearch("");
                  setShowSuggestions(false);
                }}
              >
                <img src={product.image} alt={product.name} />

                <div className="suggestion-info">
                  <h4>{product.name}</h4>
                  <small>₦{product.price.toLocaleString()}</small>
                </div>
              </div>
            ))
          ) : (
            <p className="no-suggestion">No matching products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;