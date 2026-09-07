import { useNavigate } from "react-router-dom";

/**
 * Shared header used across every Shop screen. Keeping this as a single
 * component is what makes the Marketplace feel like part of the existing
 * Shop experience rather than a bolted-on page.
 */
export default function Header({ title, eyebrow, showBack = true, badge }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      {showBack && (
        <button
          className="header__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <div className="header__titles">
        {eyebrow && <span className="header__eyebrow">{eyebrow}</span>}
        <h1 className="header__title">{title}</h1>
      </div>
      <div className="header__spacer" />
      {badge && (
        <div className="header__badge" aria-hidden="true">
          {badge}
        </div>
      )}
    </header>
  );
}
