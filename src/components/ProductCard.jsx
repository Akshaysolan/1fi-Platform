import { useNavigate } from "react-router-dom";

function formatINR(amount) {
  return `\u20b9${amount.toLocaleString("en-IN")}`;
}

/** Reusable product tile shown in the marketplace grid. */
export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <button
      className="product-card"
      onClick={() => navigate(`/marketplace/product/${product.id}`)}
    >
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-card__emi-tag">
          {formatINR(product.fromEmi)}/mo
        </span>
      </div>
      <div className="product-card__body">
        <span className="product-card__brand">{product.brand}</span>
        <span className="product-card__name">{product.name}</span>
        <div className="product-card__price-row">
          <span className="product-card__price">{formatINR(product.price)}</span>
          {product.mrp > product.price && (
            <span className="product-card__mrp">{formatINR(product.mrp)}</span>
          )}
        </div>
        <span className="product-card__from-emi">
          EMI from {formatINR(product.fromEmi)}/month
        </span>
      </div>
    </button>
  );
}
