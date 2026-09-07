import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/shop" },
  { label: "About Us", path: null },
  { label: "How it Works", path: null },
  { label: "Shop", path: "/shop" },
  { label: "Calculator", path: null },
  { label: "Contact Us", path: null },
  { label: "Partner With Us", path: null },
  { label: "FAQs", path: null }
];

/**
 * The persistent site header, matching the real 1Fi app's nav (logo,
 * primary links, "Shop Now" CTA). Only Home/Shop are wired up since the
 * assignment scopes this build to the Marketplace inside Shop — the rest
 * render as inert links so the page doesn't feel like a fragment cut out
 * of the real site.
 */
export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const inShop = location.pathname.startsWith("/shop") || location.pathname.startsWith("/marketplace");

  return (
    <header className="topnav">
      <div className="topnav__inner">
        <button className="topnav__logo" onClick={() => navigate("/shop")} aria-label="1Fi home">
          <span className="topnav__logo-mark">1Fi</span>
        </button>

        <nav className="topnav__links">
          {NAV_LINKS.map((link) => {
            const isActive = link.label === "Shop" && inShop;
            return (
              <button
                key={link.label}
                className={`topnav__link${isActive ? " topnav__link--active" : ""}`}
                onClick={() => link.path && navigate(link.path)}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <button className="btn btn--primary topnav__cta" onClick={() => navigate("/marketplace")}>
          Shop Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="btn__arrow">
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
