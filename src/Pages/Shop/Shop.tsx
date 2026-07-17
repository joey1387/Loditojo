import { useEffect, useMemo, useState } from "react";
import "./Shop.css";

import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import {
  getAllProducts,
} from "../../api/productApi";
const Shop = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const [brand, setBrand] = useState("All");
  const [stockOnly, setStockOnly] = useState(false);

  const highestPrice = useMemo(() => {
    return products.length
      ? Math.max(...products.map((p) => p.price))
      : 0;
  }, [products]);

  const [maxPrice, setMaxPrice] = useState(0);

  const PRODUCTS_PER_PAGE = 12;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
       
        const formattedProducts = data.map((product: any) => ({
          id: product._id,
          name: product.name,
          description: product.description,
          category: product.category?.name || "",
         brand: product.brand || "Unknown",
          price: product.basePrice,
          rating: product.ratings?.average || 0,
          stock: product.stock,
          featured: product.isFeatured,
          image: product.images?.[0] || "",
          images: product.images || [],
          specifications: product.specs || {},
         reviews: product.reviews || [],
        }));

        setProducts(formattedProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setMaxPrice(highestPrice);
  }, [highestPrice]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    category,
    brand,
    stockOnly,
    maxPrice,
    sortBy,
  ]);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const brands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesBrand =
        brand === "All" ||
        product.brand === brand;

      const matchesPrice =
        product.price <= maxPrice;

      const matchesStock =
        !stockOnly || product.stock > 0;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesStock
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);

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

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="shop-page">
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <h1 className="shop-title">
        🛍 Browse Our Collection
      </h1>

      <div className="shop-controls">

        <SearchBar
          search={search}
          setSearch={setSearch}
          products={products}
        />

        <div className="extra-filters">

          <select
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
          >
            {brands.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          <label className="stock-filter">
            <input
              type="checkbox"
              checked={stockOnly}
              onChange={(e) =>
                setStockOnly(e.target.checked)
              }
            />
            In Stock Only
          </label>

        </div>

        <div className="price-filter">

          <span>
            Max Price:
            ₦{maxPrice.toLocaleString()}
          </span>

          <input
            type="range"
            min="0"
            max={highestPrice}
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
          />

          <button
            className="clear-filter-btn"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setBrand("All");
              setStockOnly(false);
              setMaxPrice(highestPrice);
              setSortBy("default");
            }}
          >
            Clear All Filters
          </button>

        </div>

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "active-category"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
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

          <option value="name">
            Name (A-Z)
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

        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))
        ) : (
          <div className="empty-search">

            <h2>No Products Found</h2>

            <p>
              We couldn't find any product matching{" "}
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

      {totalPages > 1 && (

        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
          >
            ← Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                key={index}
                className={
                  currentPage === index + 1
                    ? "active-page"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(index + 1)
                }
              >
                {index + 1}
              </button>
            )
          )}

          <button
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
          >
            Next →
          </button>

        </div>

      )}

    </div>
  );
};

export default Shop;