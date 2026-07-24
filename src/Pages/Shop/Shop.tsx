import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Shop.css";

import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import FilterBar from "../../Components/FilterBar/FilterBar";
import { getAllProducts } from "../../api/productApi";
import  api  from "../../services/api";

interface Category {
  _id: string;
  name: string;
}

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Initialize search state from URL query parameter (e.g. /shop?search=iphone)
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const [brand, setBrand] = useState("All");
  const [stockOnly, setStockOnly] = useState(false);

  // Fetch Backend Categories dynamically
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        const categoryNames = res.data.map((cat: Category) => cat.name);
        setCategoriesList(categoryNames);
      } catch (err) {
        console.error("Failed to load categories from API:", err);
      }
    };

    fetchCategories();
  }, []);

  const highestPrice = useMemo(() => {
    return products.length
      ? Math.max(...products.map((p) => p.price))
      : 0;
  }, [products]);

  const [maxPrice, setMaxPrice] = useState(0);

  const PRODUCTS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Sync state if URL changes directly
  useEffect(() => {
    const urlQuery = searchParams.get("search") || "";
    setSearch(urlQuery);
  }, [searchParams]);

  // Handler to update both state and URL when typing/clearing search
  const handleSearchChange = (value: string | ((prev: string) => string)) => {
    const nextSearch = typeof value === "function" ? value(search) : value;
    setSearch(nextSearch);

    if (nextSearch.trim()) {
      setSearchParams({ search: nextSearch }, { replace: true });
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams, { replace: true });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();

        const formattedProducts = data.map((product: any) => ({
          id: product._id,
          name: product.name,
          description: product.description,
          category: product.category?.name || "Uncategorized",
          brand: product.brand || "Unknown",
          price: product.basePrice || product.price || 0,
          rating: product.ratings?.average || 0,
          stock: product.stock || 0,
          featured: product.isFeatured || false,
          image: product.images?.[0] || "",
          images: product.images || [],
          specifications: product.specs || {},
          reviews: product.reviews || [],
        }));

        setProducts(formattedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
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
  }, [search, category, brand, stockOnly, maxPrice, sortBy]);

  // Merge backend categories with derived product categories for completeness
  const categories = useMemo(() => {
    const derived = products.map((p) => p.category).filter(Boolean);
    return [...new Set([...categoriesList, ...derived])];
  }, [categoriesList, products]);

  const brands = useMemo(() => {
    return [
      "All",
      ...new Set(products.map((p) => p.brand).filter(Boolean)),
    ];
  }, [products]);

  const resetAllFilters = () => {
    handleSearchChange("");
    setCategory("All");
    setBrand("All");
    setStockOnly(false);
    setMaxPrice(highestPrice);
    setSortBy("default");
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesBrand =
        brand === "All" || product.brand === brand;

      const matchesPrice = product.price <= maxPrice;

      const matchesStock = !stockOnly || product.stock > 0;

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
        case "price-low":
        case "low":
          return a.price - b.price;
        case "price-high":
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

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="shop-page loading-state">
        <div className="spinner"></div>
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <h1 className="shop-title">🛍 Browse Our Collection</h1>

      <div className="shop-controls">
        <SearchBar
          search={search}
          setSearch={handleSearchChange}
          products={products}
        />

        <FilterBar
          category={category}
          setCategory={setCategory}
          priceRange={maxPrice}
          setPriceRange={setMaxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
          maxPrice={highestPrice || 100000}
          resetFilters={resetAllFilters}
        />

        <div className="extra-filters">
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            aria-label="Filter by brand"
          >
            {brands.map((item) => (
              <option key={item} value={item}>
                Brand: {item}
              </option>
            ))}
          </select>

          <label className="stock-filter">
            <input
              type="checkbox"
              checked={stockOnly}
              onChange={(e) => setStockOnly(e.target.checked)}
            />
            In Stock Only
          </label>
        </div>
      </div>

      <p className="product-count">
        Showing <span>{filteredProducts.length}</span> product
        {filteredProducts.length !== 1 && "s"}
      </p>

      <div className="products-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="empty-search">
            <h2>No Products Found</h2>
            <p>
              We couldn't find any products matching{" "}
              {search && <strong>"{search}"</strong>}
            </p>
            <button onClick={resetAllFilters}>
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            ← Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;