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
          <p className="placeholder__title">Nothing here yet</p>
          <p className="placeholder__desc">
            This section is out of scope for now. If you're looking to buy
            something, 1Fi Marketplace is where the action is.
          </p>
        </div>
      </main>
    </>
  );
}
