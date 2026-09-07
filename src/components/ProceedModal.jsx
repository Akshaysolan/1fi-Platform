function formatINR(amount) {
  return `\u20b9${amount.toLocaleString("en-IN")}`;
}

/** Confirmation summary shown after the user taps Proceed. */
export default function ProceedModal({ product, variant, plan, onClose }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-card__icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="modal-card__title">Plan selected</p>
        <p className="modal-card__desc">
          Here's a summary of your order. In the full 1Fi app this would move
          into KYC and payment setup.
        </p>

        <div className="modal-card__summary">
          <div className="modal-card__row">
            <span>Product</span>
            <span>{product.name}</span>
          </div>
          <div className="modal-card__row">
            <span>Variant</span>
            <span>{variant.label}</span>
          </div>
          <div className="modal-card__row">
            <span>EMI tenure</span>
            <span>{plan.months} months</span>
          </div>
          <div className="modal-card__row">
            <span>Monthly payment</span>
            <span>{formatINR(plan.monthlyAmount)}</span>
          </div>
        </div>

        <div className="modal-card__actions">
          <button className="btn btn--outline btn--block" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
