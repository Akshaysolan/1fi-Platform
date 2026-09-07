/** Shown whenever the API/service layer throws. Always offers a retry. */
export default function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this right now. Check your connection and try again.",
  onRetry
}) {
  return (
    <div className="error-state">
      <div className="error-state__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="error-state__title">{title}</p>
      <p className="error-state__desc">{description}</p>
      {onRetry && (
        <button className="btn btn--primary" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
