import "./SearchBar.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  category: any;
  basePrice?: number;
  price?: number;
  images?: string[];
}

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  products?: Product[];
};

const SearchBar = ({
  search,
  setSearch,
  products = [],
}: Props) => {
  const navigate = useNavigate();

  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = products
    .filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .slice(0, 5);

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
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => {
            setSearch("");
            setShowSuggestions(false);
          }}
        >
          <FaTimes />
        </button>
      )}

      {search &&
        showSuggestions &&
        products.length > 0 && (
          <div className="search-suggestions">
            {suggestions.length > 0 ? (
              suggestions.map((product) => (
                <div
                  key={product._id}
                  className="suggestion-item"
                  onClick={() => {
                    navigate(`/product/${product._id}`);
                    setSearch("");
                    setShowSuggestions(false);
                  }}
                >
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                  />

                  <div>
                    <h4>{product.name}</h4>

                    <small>
                      ₦
                      {(
                        product.basePrice ??
                        product.price ??
                        0
                      ).toLocaleString()}
                    </small>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-suggestion">
                No matching products
              </p>
            )}
          </div>
        )}
    </div>
  );
};

export default SearchBar;