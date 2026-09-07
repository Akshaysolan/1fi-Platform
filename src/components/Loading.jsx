/**
 * Loading states.
 * `variant="grid"` renders skeleton product cards (used on the marketplace
 * listing). `variant="inline"` renders a small centered spinner (used on
 * the product details page).
 */
export default function Loading({ variant = "inline", count = 8 }) {
  if (variant === "grid") {
    return (
      <div className="product-grid" aria-busy="true" aria-label="Loading products">
        {Array.from({ length: count }).map((_, i) => (
          <div className="skeleton-card" key={i}>
            <div className="skeleton skeleton-card__image" />
            <div className="skeleton-card__body">
              <div className="skeleton" style={{ height: 10, width: "40%" }} />
              <div className="skeleton" style={{ height: 12, width: "85%" }} />
              <div className="skeleton" style={{ height: 14, width: "55%" }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="loading-inline" aria-busy="true">
      <span className="spinner" />
      <span>Loading...</span>
    </div>
  );
}
