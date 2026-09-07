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
      {plan.isNoCost && <span className="emi-card__badge">No-cost EMI</span>}
    </button>
  );
}
