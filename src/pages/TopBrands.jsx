import Header from "../components/Header";

/**
 * Intentionally blank per the assignment — "No implementation required."
 * Kept as a real route with a light placeholder so navigation from Shop
 * doesn't dead-end.
 */
export default function TopBrands() {
  return (
    <>
      <Header title="Top Brands" eyebrow="Shop" />
      <main className="page">
        <div className="placeholder">
          <div className="placeholder__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.6 6.6L21 9l-5 4.6L17.4 21 12 17.3 6.6 21 8 13.6 3 9l6.4-.4L12 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="placeholder__title">Coming soon</p>
          <p className="placeholder__desc">
            Top Brands isn't part of this build. Head back to Shop to try 1Fi
            Marketplace instead.
          </p>
        </div>
      </main>
    </>
  );
}
