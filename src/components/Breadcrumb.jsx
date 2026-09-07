import { useNavigate, Link } from "react-router-dom";

/**
 * Breadcrumb trail shown under the top nav on every page inside Shop.
 * `trail` is the list of ancestor pages (clickable), `current` is the
 * page you're on. Includes a back button since Marketplace and Product
 * Details are a few levels deep.
 */
export default function Breadcrumb({ trail = [], current }) {
  const navigate = useNavigate();

  return (
    <div className="breadcrumb">
      <button className="breadcrumb__back" onClick={() => navigate(-1)} aria-label="Go back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="breadcrumb__trail">
        {trail.map((item) => (
          <span key={item.label}>
            <Link to={item.path}>{item.label}</Link>
            <span> / </span>
          </span>
        ))}
        <span className="breadcrumb__current">{current}</span>
      </div>
    </div>
  );
}
