import { useEffect, useMemo, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";
import VariantSelector from "../components/VariantSelector";
import EmiPlanCard from "../components/EmiPlanCard";
import ProceedModal from "../components/ProceedModal";
import { getProductById, computeEmiPlans } from "../api/productApi";

function formatINR(amount) {
  return `\u20b9${amount.toLocaleString("en-IN")}`;
}

const CRUMBS = [
  { label: "Shop", path: "/shop" },
  { label: "1Fi Marketplace", path: "/marketplace" }
];

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | error | ready

  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [selectedEmiId, setSelectedEmiId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const data = await getProductById(id);
      setProduct(data);
      const firstInStock = data.variants.find((v) => v.stock > 0);
      setSelectedVariantId(firstInStock ? firstInStock.id : data.variants[0].id);
      setSelectedEmiId(null);
      setActiveImage(0);
      setStatus("ready");
    } catch (err) {
      setStatus("error");
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  const selectedVariant = useMemo(() => {
    if (!product) return null;
    return product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];
  }, [product, selectedVariantId]);

  const emiPlans = useMemo(() => {
    if (!selectedVariant) return [];
    return computeEmiPlans(selectedVariant.price);
  }, [selectedVariant]);

  // Selected EMI plan should follow the variant's price even if the user
  // switches variants after picking a plan.
  useEffect(() => {
    setSelectedEmiId(null);
  }, [selectedVariantId]);

  const selectedPlan = emiPlans.find((p) => p.id === selectedEmiId) || null;
  const canProceed = Boolean(selectedVariant && selectedPlan);

  if (status === "loading") {
    return (
      <>
        <Breadcrumb trail={CRUMBS} current="Product" />
        <main className="page">
          <Loading variant="inline" />
        </main>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <Breadcrumb trail={CRUMBS} current="Product" />
        <main className="page">
          <ErrorState
            title="Couldn't load this product"
            description="It may have been removed, or something went wrong. Please try again."
            onRetry={load}
          />
        </main>
      </>
    );
  }

  return (
    <>
      <Breadcrumb trail={CRUMBS} current={product.name} />
      <main className="page">
        <div className="pdp">
          <div className="pdp__gallery">
            <div className="pdp__main-image">
              <img src={product.images[activeImage]} alt={product.name} />
            </div>
            <div className="pdp__thumbs">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  className={`pdp__thumb${i === activeImage ? " pdp__thumb--active" : ""}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="pdp__info">
            <div>
              <h2 className="pdp__name">
                {product.name}{" "}
                <span className="pdp__brand-inline">by {product.brand}</span>
              </h2>
              <div className="pdp__rating">
                <span className="pdp__rating-badge">
                  {product.rating.toFixed(1)}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.5L22 9.3l-5 4.9 1.2 7.1L12 17.8l-6.2 3.5L7 14.2 2 9.3l7.1-.8z" />
                  </svg>
                </span>
                <span>{product.ratingCount.toLocaleString("en-IN")} ratings</span>
              </div>

              <div className="pdp__price-card">
                <span className="pdp__price-label">Price</span>
                <div className="pdp__price-block">
                  <span className="pdp__price">{formatINR(selectedVariant.price)}</span>
                  {product.mrp > selectedVariant.price && (
                    <span className="pdp__mrp">{formatINR(product.mrp)}</span>
                  )}
                </div>
                {product.mrp > selectedVariant.price && (
                  <span className="pdp__discount">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17l4-6 3 3 5-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    You save {formatINR(product.mrp - selectedVariant.price)} (
                    {Math.round((1 - selectedVariant.price / product.mrp) * 100)}% off)
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="section-label">
                Select variant
                {selectedVariant.stock <= 3 && selectedVariant.stock > 0 && (
                  <span className="section-label__hint">
                    Only {selectedVariant.stock} left
                  </span>
                )}
              </div>
              <VariantSelector
                variants={product.variants}
                selectedId={selectedVariantId}
                onSelect={setSelectedVariantId}
              />
            </div>

            <div>
              <div className="section-label">
                Select an EMI plan
                <span className="section-label__hint">
                  On {formatINR(selectedVariant.price)}
                </span>
              </div>
              <div className="emi-list" role="radiogroup" aria-label="EMI plans">
                {emiPlans.map((plan) => (
                  <EmiPlanCard
                    key={plan.id}
                    plan={plan}
                    selected={plan.id === selectedEmiId}
                    onSelect={setSelectedEmiId}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="section-label">Product details</div>
              <div className="detail-list">
                {product.specs.map((spec) => (
                  <div className="detail-row" key={spec.label}>
                    <span className="detail-row__label">{spec.label}</span>
                    <span className="detail-row__value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-label">About this product</div>
              <p className="pdp__description">{product.description}</p>
            </div>
          </div>
        </div>
      </main>

      <div className="proceed-bar">
        <div className="proceed-bar__inner">
          <div className="proceed-bar__info">
            <span className="proceed-bar__label">
              {selectedPlan ? `${selectedPlan.months}-month plan` : "Select a plan"}
            </span>
            <span className="proceed-bar__value">
              {selectedPlan
                ? `${formatINR(selectedPlan.monthlyAmount)}/mo`
                : formatINR(selectedVariant.price)}
            </span>
          </div>
          <button
            className="btn btn--primary proceed-bar__cta"
            disabled={!canProceed}
            onClick={() => setShowConfirmation(true)}
          >
            Proceed
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
      </div>

      {showConfirmation && selectedPlan && (
        <ProceedModal
          product={product}
          variant={selectedVariant}
          plan={selectedPlan}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
}
