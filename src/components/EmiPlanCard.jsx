function formatINR(amount) {
  return `\u20b9${amount.toLocaleString("en-IN")}`;
}

/** Selectable EMI plan row. Behaves like a radio button for the plan list. */
export default function EmiPlanCard({ plan, selected, onSelect }) {
  return (
    <button
      className={`emi-card${selected ? " emi-card--active" : ""}`}
      onClick={() => onSelect(plan.id)}
      role="radio"
      aria-checked={selected}
    >
      <span className="emi-card__radio">
        {selected && <span className="emi-card__radio-dot" />}
      </span>
      <span className="emi-card__body">
        <span className="emi-card__amount">
          {formatINR(plan.monthlyAmount)}
          <span style={{ fontWeight: 500, color: "var(--muted)", fontSize: 12.5 }}>
            {" "}
            / month
          </span>
        </span>
        <span className="emi-card__meta">
          Pay over {plan.months} months, {formatINR(plan.totalPayable)} in total
        </span>
      </span>
      {plan.isNoCost && (
        <span className="emi-card__badge">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          No-cost EMI
        </span>
      )}
    </button>
  );
}
