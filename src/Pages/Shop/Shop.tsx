import { useState } from "react";
import "./Shop.css";

import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { products } from "../../data/products";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "low":
          return a.price - b.price;

        case "high":
          return b.price - a.price;

        case "rating":
          return b.rating - a.rating;

        default:
          return 0;
      }
    });

  return (
    <div className="shop-page">
      <h1 className="shop-title">
        All Products
      </h1>

      <div className="shop-controls">
        <SearchBar
          search={search}
          setSearch={setSearch}
          products={products}
        />

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "active-category"
                  : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="default">
            Sort Products
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>
        </select>
      </div>

      <p className="product-count">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 && "s"}
      </p>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))
        ) : (
          <div className="empty-search">
            <h2>No Products Found</h2>

            <p>
              We couldn't find any product
              matching{" "}
              <strong>"{search}"</strong>
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;