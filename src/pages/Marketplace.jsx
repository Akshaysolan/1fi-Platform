import { useEffect, useState, useCallback } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";
import { getCategories, getProducts } from "../api/productApi";

export default function Marketplace() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | error | ready

  const loadCategories = useCallback(async () => {
    try {
      const cats = await getCategories();
      setCategories(cats);
    } catch {
      // Category chips are non-critical — fail silently and keep "All".
      setCategories([{ id: "all", label: "All" }]);
    }
  }, []);

  const loadProducts = useCallback(async (category) => {
    setStatus("loading");
    try {
      const list = await getProducts({ category });
      setProducts(list);
      setStatus("ready");
    } catch (err) {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  useEffect(() => {
    loadProducts(activeCategory);
  }, [activeCategory, loadProducts]);

  return (
    <>
      <Breadcrumb trail={[{ label: "Shop", path: "/shop" }]} current="1Fi Marketplace" />
      <main className="page">
        {categories.length > 0 && (
          <div className="filters" role="tablist" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-chip${
                  activeCategory === cat.id ? " filter-chip--active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {status === "loading" && <Loading variant="grid" />}

        {status === "error" && (
          <ErrorState
            title="Couldn't load the marketplace"
            description="Something went wrong while fetching products. Please try again."
            onRetry={() => loadProducts(activeCategory)}
          />
        )}

        {status === "ready" && products.length === 0 && (
          <div className="placeholder">
            <p className="placeholder__title">No products here yet</p>
            <p className="placeholder__desc">
              Try a different category to keep browsing.
            </p>
          </div>
        )}

        {status === "ready" && products.length > 0 && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
