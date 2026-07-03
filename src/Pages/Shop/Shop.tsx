import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Shop.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { products } from "../../data/products";

const Shop = () => {

  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
  const searchQuery = searchParams.get("search");
  const categoryQuery = searchParams.get("category");

  if (searchQuery) {
    setSearch(searchQuery);
  }

  if (categoryQuery) {
    setCategory(categoryQuery);
  }
}, [searchParams]);
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products
    .filter((product) => {

      const matchesSearch =
        product.name
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

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            featured={product.featured}
            image={product.image}
          />

        ))}

      </div>

    </div>

  );

};

export default Shop;