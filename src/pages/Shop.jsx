import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const OPTIONS = [
  {
    id: "top-brands",
    path: "/shop/top-brands",
    title: "Top Brands",
    desc: "Curated deals from brands people search for most.",
    featured: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.6 6.6L21 9l-5 4.6L17.4 21 12 17.3 6.6 21 8 13.6 3 9l6.4-.4L12 2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    id: "nearby-stores",
    path: "/shop/nearby-stores",
    title: "Nearby Stores",
    desc: "Find in-person stores that accept 1Fi EMI plans.",
    featured: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  },
  {
    id: "marketplace",
    path: "/marketplace",
    title: "1Fi Marketplace",
    desc: "Browse electronics and essentials, pick a plan, pay monthly.",
    featured: true,
    tag: "New",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 8h16l-1.4 10.3a2 2 0 01-2 1.7H7.4a2 2 0 01-2-1.7L4 8z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8 8V6a4 4 0 118 0v2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
];

export default function Shop() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Shop" showBack={false} />
      <main className="page">
        <div className="shop-hero">
          <p className="shop-hero__kicker">1Fi &middot; Shop</p>
          <h2 className="shop-hero__title">
            Everyday buys, on your terms.
          </h2>
        </div>

        <div className="shop-options">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              className={`shop-option${opt.featured ? " shop-option--featured" : ""}`}
              onClick={() => navigate(opt.path)}
            >
              <span className="shop-option__icon">{opt.icon}</span>
              <span className="shop-option__body">
                <span className="shop-option__title-row">
                  <span className="shop-option__title">{opt.title}</span>
                  {opt.tag && <span className="shop-option__tag">{opt.tag}</span>}
                </span>
                <span className="shop-option__desc">{opt.desc}</span>
              </span>
              <span className="shop-option__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
