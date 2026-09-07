import Header from "../components/Header";

/** Intentionally blank per the assignment — "No implementation required." */
export default function NearbyStores() {
  return (
    <>
      <Header title="Nearby Stores" eyebrow="Shop" />
      <main className="page">
        <div className="placeholder">
          <div className="placeholder__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
          <p className="placeholder__title">Coming soon</p>
          <p className="placeholder__desc">
            Nearby Stores isn't part of this build. Head back to Shop to try
            1Fi Marketplace instead.
          </p>
        </div>
      </main>
    </>
  );
}
